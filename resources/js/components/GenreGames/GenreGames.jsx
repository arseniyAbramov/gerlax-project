// pages/GenreGames/GenreGames.jsx

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./GenreGames.css";

export default function GenreGames() {
    const { slug } = useParams();
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios
            .get(`/api/genres/${slug}/games`)
            .then((res) => setGames(res.data))
            .catch((err) =>
                console.error("Ошибка при загрузке игр жанра:", err)
            );
    }, [slug]);

    return (
        <section className="genre-games">
            <h2>Игры жанра: {slug}</h2>
            <div className="genre-games__list">
                {games.map((game) => (
                    <div key={game.id} className="genre-games__card">
                        <img src={game.poster} alt={game.title} />
                        <h3>{game.title}</h3>
                        <p>{game.price}₽</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
