import React from "react";
import { useFavorites } from "../../context/FavoritesContext";
import "./FavoritesModal.css";

export default function FavoritesModal({ onClose }) {
    const { favorites, removeFromFavorites, clearFavorites } = useFavorites();

    return (
        <div className="favorites-modal__wrapper">
            <div className="favorites-modal__overlay" onClick={onClose} />
            <div className="favorites-modal__content">
                <h2 className="favorites-modal__title">❤️ Избранное</h2>

                {favorites.length === 0 ? (
                    <p className="favorites-modal__empty">
                        Вы ничего не добавили 🙃
                    </p>
                ) : (
                    <>
                        <ul className="favorites-modal__list">
                            {favorites.map((game) => (
                                <li
                                    key={game.id}
                                    className="favorites-modal__item"
                                >
                                    <img
                                        src={game.poster}
                                        alt={game.title}
                                        className="favorites-modal__thumb"
                                    />
                                    <div className="favorites-modal__info">
                                        <span className="favorites-modal__name">
                                            {game.title}
                                        </span>
                                        <span className="favorites-modal__price">
                                            {game.price}₽
                                        </span>
                                    </div>
                                    <button
                                        className="favorites-modal__remove"
                                        onClick={() =>
                                            removeFromFavorites(game.id)
                                        }
                                    >
                                        ✕
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button
                            className="favorites-modal__clear"
                            onClick={clearFavorites}
                        >
                            Очистить всё
                        </button>
                    </>
                )}
                <div className="favorites-modal__actions">
                    <button
                        className="favorites-modal__close"
                        onClick={onClose}
                    >
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    );
}
