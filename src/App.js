import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Checkout from "./pages/checkout/Checkout";
import Product from "./pages/products/Product";
import Login from "./pages/login/Login";
import Help from "./pages/Help/Help";
import Cart from "./pages/cart/Cart";


const App = () => {
  return (
    <div>
      <Router>
        
          < Header/>
      
        <div className="m-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<Help />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>

        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
