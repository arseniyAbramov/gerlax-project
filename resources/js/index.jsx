import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../style.css";

import CartModal from "./components/Cart/CartModal";
import CartPage from "./components/Cart/CartPage";
import FavoritesModal from "./components/Favorites/FavoritesModal";
import Header from "./components/Header/Header";
import AboutPage from "./pages/About/AboutPage";
import GamePage from "./pages/Game/GamePage";
import GenrePage from "./pages/GenrePage/GenrePage";
import HomePage from "./pages/Home/HomePage";
import NewGamesPage from "./pages/NewGamesPage/NewGamesPage";

// ...

// import NewGamesPage from "./pages/NewGames/NewGamesPage";

function App() {
    const [isCartOpen, setCartOpen] = useState(false);
    const [isFavOpen, setFavOpen] = useState(false);

    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);

    const openFav = () => setFavOpen(true);
    const closeFav = () => setFavOpen(false);

    return (
        <Router>
            <Header onOpenCart={openCart} onOpenFavorites={openFav} />

            {isCartOpen && <CartModal onClose={closeCart} />}
            {isFavOpen && <FavoritesModal onClose={closeFav} />}

            <Routes>
                <Route path="/" element={<HomePage onBuy={openCart} />} />
                <Route path="/cart" element={<CartPage />} />
                <Route
                    path="/genres/:slug"
                    element={<GenrePage onBuy={openCart} />}
                />
                <Route path="/game/:id" element={<GamePage />} />
                <Route path="/genres/:slug/game/:id" element={<GamePage />} />
                <Route
                    path="/new"
                    element={<NewGamesPage onBuy={openCart} />}
                />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    );
}

export default App;
