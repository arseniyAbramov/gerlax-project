import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { useCart } from "../../context/CartContext";
import "./CartPage.css";

export default function CartPage() {
    const { cartItems, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();

    const handleCheckout = async () => {
        console.log("🔥 Кнопка оформляет заказ");
        console.log("🛍️ Корзина:", cartItems);
        console.log("💰 Сумма заказа:", totalPrice);

        const token = localStorage.getItem("token");
        if (!token) {
            alert("Вы не авторизованы!");
            navigate("/login");
            return;
        }

        if (cartItems.length === 0) {
            alert("Корзина пуста");
            return;
        }

        try {
            const res = await axios.post("/orders", {
                total_price: totalPrice,
            });
            console.log("✅ Ответ от сервера:", res.data);

            clearCart();
            alert("Заказ оформлен! 🎉");
            navigate("/profile");
        } catch (err) {
            console.error("❌ Ошибка при оформлении заказа:", err);
            alert("Ошибка при оформлении заказа. Подробности в консоли.");
        }
    };

    return (
        <div className="cart-page">
            <h1>🛒 Корзина</h1>

            {cartItems.length === 0 ? (
                <p>Корзина пуста.</p>
            ) : (
                <>
                    <ul className="cart-page__list">
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.title} — {item.price}₽
                            </li>
                        ))}
                    </ul>

                    <div className="cart-page__total">
                        <p>Итого: {totalPrice}₽</p>
                        <button type="button" onClick={handleCheckout}>
                            Оформить заказ
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
