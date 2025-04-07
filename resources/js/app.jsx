import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./context/CartContext";
import App from "./index"; // импорт из index.jsx

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <CartProvider>
        <App />
    </CartProvider>
);
