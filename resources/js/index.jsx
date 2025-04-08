// index.jsx

import React, { useState } from "react"; // 👈 ВОТ ЭТО ДОБАВЬ
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../style.css";
import CartModal from "./components/Cart/CartModal";
import CartPage from "./components/Cart/CartPage";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/HomePage";

function App() {
    const [isCartOpen, setCartOpen] = useState(false);

    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);

    return (
        <Router>
            <Header onOpenCart={openCart} />
            {isCartOpen && <CartModal onClose={closeCart} />}

            <Routes>
                {/* <Route path="/" element={<BestGames onBuy={openCart} />} /> */}
                <Route path="/" element={<HomePage onBuy={openCart} />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Router>
    );
}

export default App;
