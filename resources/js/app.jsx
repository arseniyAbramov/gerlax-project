import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import App from "./index";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
    <FavoritesProvider>
        <CartProvider>
            <Toaster
                position="bottom-center"
                toastOptions={{ duration: 2000 }}
            />
            <App />
        </CartProvider>
    </FavoritesProvider>
);
