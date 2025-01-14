<div className="billingContainer">
  <h1>Enter Billing Details</h1>
  <form onSubmit={handleSubmit} className="billingForm">
    {/* Name Field */}
    <label>Name:</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
    />

    {/* Email Field */}
    <label>Email:</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
    />

    {/* Address Field */}
    <label>Address:</label>
    <input
      type="text"
      name="address"
      value={formData.address}
      onChange={handleChange}
      required
    />

    {/* City Field */}
    <label>City:</label>
    <input
      type="text"
      name="city"
      value={formData.city}
      onChange={handleChange}
      required
    />

    {/* ZIP Code Field */}
    <label>ZIP Code:</label>
    <input
      type="text"
      name="zip"
      value={formData.zip}
      onChange={handleChange}
      required
    />

    {/* Payment Method Field */}
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

    {/* Submit Button */}
    <button type="submit" className="checkoutBtn">
      Place Order
    </button>
  </form>
</div>
