import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import HeroBanner from "./components/Hero/HeroBanner";
import Product from "./components/Cards/Product";
import BillingDetails from "./components/Billing/BillingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div>
            <Navbar />
          </div>
          <div>
            <HeroBanner />
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/billing" element={<BillingDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
