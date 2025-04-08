// BestGames.jsx

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import "./BestGames.css";

export default function BestGames({ onBuy }) {
    const { addToCart } = useCart();
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios
            .get("/api/games")
            .then((res) => setGames(res.data.slice(0, 4)))
            .catch((err) => console.error("Ошибка при загрузке игр:", err));
    }, []);

    return (
        <section className="best-games">
            <h2 className="best-games__title">Лучшие игры</h2>
            <div className="best-games__list">
                {games.map((game) => (
                    <article className="best-games__card" key={game.id}>
                        <img
                            src={game.poster}
                            alt={game.title}
                            className="best-games__poster"
                        />
                        <h3 className="best-games__name">{game.title}</h3>
                        <p className="best-games__price">{game.price}₽</p>
                        <button
                            className="best-games__buy"
                            onClick={() => {
                                addToCart(game);
                                onBuy(); // 👉 открываем модалку
                            }}
                        >
                            Купить
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}
