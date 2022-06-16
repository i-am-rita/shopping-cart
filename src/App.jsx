// import { useState } from 'react'
import "./App.css";
import Navbar from "./Navbar";
import Content from "./Component/Content";
import CheckoutPage from "./Component/CheckoutPage";
import { CartProvider } from "./CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/CheckoutPage" element={<CheckoutPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
