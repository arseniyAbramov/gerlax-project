import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__logo">
                    <img src="/logo-mechta-white.svg" alt="Gerlax" />
                    <p>© 2025 Gerlax. Все права защищены.</p>
                </div>

                <div className="footer__nav">
                    <Link to="/" className="footer__link">
                        Главная
                    </Link>
                    <Link to="/new" className="footer__link">
                        Новинки
                    </Link>
                    <Link to="/about" className="footer__link">
                        О нас
                    </Link>
                    <Link to="/cart" className="footer__link">
                        Корзина
                    </Link>
                </div>

                <div className="footer__contacts">
                    <p>Email: support@gerlax.ru</p>
                    <p>Тел: +7 900 000 00 00</p>
                </div>
            </div>
        </footer>
    );
}
