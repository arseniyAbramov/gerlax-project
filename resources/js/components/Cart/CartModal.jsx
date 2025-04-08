// components/Cart/CartModal.jsx

import React from "react";
import { useCart } from "../../context/CartContext";
import "./CartModal.css"; // можно потом стилизовать

export default function CartModal({ onClose }) {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="cart-modal__wrapper">
            <div className="cart-modal__overlay" onClick={onClose} />
            <div className="cart-modal__content">
                <h2 className="cart-modal__title">🛒 Ваша корзина</h2>

                {cart.length === 0 ? (
                    <p className="cart-modal__empty">Корзина пуста 🙃</p>
                ) : (
                    <ul className="cart-modal__list">
                        {cart.map((game, index) => (
                            <li key={index} className="cart-modal__item">
                                <span>{game.title}</span>
                                <button
                                    className="cart-modal__remove"
                                    onClick={() => removeFromCart(game.id)}
                                >
                                    Удалить
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                <button className="cart-modal__close" onClick={onClose}>
                    Закрыть
                </button>
            </div>
        </div>
    );
}
