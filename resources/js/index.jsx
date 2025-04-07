import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../style.css";
import CartPage from "./components/Cart/CartPage";
import Header from "./components/Header/Header"; // 👈 добавляем
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import HomePage from "./pages/Home/HomePage";

function App() {
    return (
        <Router>
            <Header /> {/* 👈 вставляем сюда */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Router>
    );
}

export default App;
