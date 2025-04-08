import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleFavorite = (game) => {
        const exists = favorites.some((g) => g.id === game.id);
        setFavorites((prev) =>
            exists ? prev.filter((g) => g.id !== game.id) : [...prev, game]
        );
    };

    const removeFromFavorites = (id) => {
        setFavorites((prev) => prev.filter((g) => g.id !== id));
    };

    const clearFavorites = () => setFavorites([]);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                toggleFavorite,
                removeFromFavorites,
                clearFavorites,
                isOpen,
                openModal,
                closeModal,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}
