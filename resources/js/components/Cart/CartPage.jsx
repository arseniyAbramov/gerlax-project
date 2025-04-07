import React from "react";
import { useCart } from "../../context/CartContext";
import "./CartPage.css";

export default function CartPage() {
    const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="cart">
            <h1 className="cart__title">Корзина</h1>

            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <>
                    <ul className="cart__list">
                        {cart.map((item) => (
                            <li key={item.id} className="cart__item">
                                <img src={item.poster} alt={item.title} />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.price}₽</p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="cart__footer">
                        <p>Итого: {total}₽</p>
                        <button onClick={clearCart}>Оформить заказ</button>
                    </div>
                </>
            )}
        </div>
    );
}
