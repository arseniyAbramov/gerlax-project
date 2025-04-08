import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./GamePage.css"; // не забудь создать

export default function GamePage() {
    const { id } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        axios
            .get(`/api/games/${id}`)
            .then((res) => setGame(res.data))
            .catch((err) => console.error("Ошибка при получении игры:", err));
    }, [id]);

    if (!game) return <p className="game__loading">Загрузка...</p>;

    return (
        <section className="game">
            <img src={game.poster} alt={game.title} className="game__poster" />
            <div className="game__info">
                <h1 className="game__title">{game.title}</h1>
                <p className="game__genre">Жанр: {game.genre?.name}</p>
                <p className="game__price">Цена: {game.price}₽</p>
                <p className="game__description">
                    {game.description || "Описание скоро появится..."}
                </p>
            </div>
        </section>
    );
}
