// BestGames.jsx

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                    <Link
                        to={`/game/${game.id}`}
                        key={game.id}
                        className="best-games__card-link"
                    >
                        <article className="best-games__card">
                            <img
                                src={game.poster}
                                alt={game.title}
                                className="best-games__poster"
                            />
                            <h3 className="best-games__name">{game.title}</h3>
                            <p className="best-games__price">{game.price}₽</p>

                            {/* Кнопка с остановкой клика по родителю */}
                            <button
                                className="best-games__buy"
                                onClick={(e) => {
                                    e.preventDefault(); // ❗️не даём ссылке сработать
                                    e.stopPropagation(); // ❗️останавливаем всплытие
                                    addToCart(game);
                                    onBuy(); // открываем модалку
                                }}
                            >
                                Купить
                            </button>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}
