// components/Cart/CartContext.js

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (game) => setCart((prev) => [...prev, game]);
    const removeFromCart = (id) =>
        setCart((prev) => prev.filter((g) => g.id !== id));
    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
}
