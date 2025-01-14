import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import BuyNow from "./BuyNow";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import confetti from "canvas-confetti";

const Product = () => {
  const [cartItem, setCartItem] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  // Add to cart method
  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex((array) => {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast.error("🛒 Product is already in cart !", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    }
    setCartItem([...cartItem, item]);
    toast.info("🛒 Product added to Cart !", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "colored",
    });
  };

  // Buy now method (redirects to billing page)
  const buyNow = () => {
    if (cartItem.length === 0) {
      toast.error("🛒 Cart is empty! Add products first.", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    }

    confetti({
      particleCount: 350,
      spread: 80,
      origin: { y: 0.8 },
    });
    toast.success("🚀 Redirecting to Billing Page!", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "colored",
    });

    // Redirect to billing page
    navigate("/billing");
  };

  // Remove product from cart
  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
    toast.warn("Product removed from Cart !", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <>
      <BuyNow addInCart={addInCart} />
      <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
    </>
  );
};

export default Product;
