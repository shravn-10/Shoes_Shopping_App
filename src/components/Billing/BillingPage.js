import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import confetti from "canvas-confetti";
import "react-toastify/dist/ReactToastify.css";
import "./BillingPage.css";

const BillingDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    payment: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the backend
      const response = await axios.post("http://localhost:5000/BillingPage.js", formData);

      if (response.status === 200) {
        toast.success("✅ Order placed successfully!", {
          position: "bottom-right",
        });

        confetti({
          particleCount: 350,
          spread: 80,
          origin: { y: 0.8 },
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          address: "",
          city: "",
          zip: "",
          payment: "",
        });
      }
    } catch (err) {
      toast.error("❌ Failed to place order. Try again.", {
        position: "bottom-right",
      });
      console.error(err);
    }
  };

  return (
    <div className="billingContainer">
      <h1>Enter Billing Details</h1>
      <form onSubmit={handleSubmit} className="billingForm">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label>ZIP Code:</label>
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          required
        />

        <label>Payment Method:</label>
        <select
          name="payment"
          value={formData.payment}
          onChange={handleChange}
          required
        >
          <option value="">Select Payment</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="UPI">UPI</option>
        </select>

        <button type="submit" className="checkoutBtn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default BillingDetails;
