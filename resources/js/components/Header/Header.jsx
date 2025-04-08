import { Heart, Search, ShoppingCart, User2 } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header({ onOpenCart, onOpenFavorites }) {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query.trim())}`);
            setQuery(""); // очищаем инпут
        }
    };
    return (
        <header className="header">
            <div className="header__left">
                <Link to="/" className="header__logo">
                    <img src="/logo-mechta.svg" alt="logo" />
                </Link>
                <nav className="header__nav">
                    <Link to="/" className="header__link">
                        Магазин
                    </Link>
                    <Link to="/new" className="header__link">
                        Новинки
                    </Link>
                    <Link to="/about" className="header__link">
                        О нас
                    </Link>
                </nav>
            </div>

            <div className="header__right">
                <form onSubmit={handleSearch} className="header__search">
                    <input
                        type="text"
                        className="header__input"
                        placeholder="Поиск игр..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="header__icon header__icon--search"
                    >
                        <Search size={16} />
                    </button>
                </form>

                <button
                    className="header__icon"
                    onClick={onOpenFavorites}
                    title="Избранное"
                >
                    <Heart color="#000" />
                </button>

                <Link to="/profile" className="header__icon">
                    <User2 color="#000" />
                </Link>

                <button
                    className="header__icon header__cart-button"
                    onClick={onOpenCart}
                    title="Корзина"
                >
                    <ShoppingCart color="#000" />
                </button>
            </div>
        </header>
    );
}
