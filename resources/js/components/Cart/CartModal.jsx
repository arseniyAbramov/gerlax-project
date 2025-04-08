import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { useCart } from "../../context/CartContext";
import "./CartModal.css";

export default function CartModal({ onClose }) {
    const navigate = useNavigate();

    const handleCheckout = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Вы не авторизованы!");
            navigate("/login");
            return;
        }

        if (cart.length === 0) {
            alert("Корзина пуста");
            return;
        }

        try {
            const res = await axios.post("/orders", {
                total_price: total,
            });
            console.log("✅ Заказ оформлен:", res.data);
            alert("Заказ оформлен! 🎉");
            onClose(); // закрываем модалку
            navigate("/profile");
        } catch (err) {
            console.error("❌ Ошибка при оформлении заказа:", err);
            alert("Ошибка при оформлении заказа.");
        }
    };
    const { cart, removeFromCart } = useCart();

    const total = cart.reduce((sum, game) => sum + Number(game.price), 0);

    return (
        <div className="cart-modal__wrapper">
            <div className="cart-modal__overlay" onClick={onClose} />
            <div className="cart-modal__content">
                <h2 className="cart-modal__title">🛒 Ваша корзина</h2>
                {cart.length === 0 ? (
                    <p className="cart-modal__empty">Корзина пуста 🙃</p>
                ) : (
                    <>
                        <ul className="cart-modal__list">
                            {cart.map((game, index) => (
                                <li key={index} className="cart-modal__item">
                                    <img
                                        src={game.poster}
                                        alt={game.title}
                                        className="cart-modal__thumb"
                                    />
                                    <div className="cart-modal__info">
                                        <span className="cart-modal__name">
                                            {game.title}
                                        </span>
                                        <span className="cart-modal__price">
                                            {game.price}₽
                                        </span>
                                    </div>
                                    <button
                                        className="cart-modal__remove"
                                        onClick={() => removeFromCart(game.id)}
                                    >
                                        ✕
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="cart-modal__summary">
                            <span>Итого:</span>
                            <span>{total}₽</span>
                        </div>

                        <button
                            className="cart-modal__checkout"
                            onClick={handleCheckout}
                        >
                            Оформить заказ
                        </button>
                    </>
                )}
                <button className="cart-modal__close" onClick={onClose}>
                    Закрыть
                </button>
            </div>
        </div>
    );
}
