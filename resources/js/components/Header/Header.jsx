import { Heart, Search, ShoppingCart, User2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ onOpenCart, onOpenFavorites }) {
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
                <div className="header__search">
                    <input
                        type="text"
                        className="header__input"
                        placeholder="Поиск игр..."
                    />
                    <Search
                        className="header__icon header__icon--search"
                        size={16}
                    />
                </div>

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
