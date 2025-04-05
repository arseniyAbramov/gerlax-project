import axios from "axios";
import React, { useEffect, useState } from "react";

export default function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios
            .get("/api/games")
            .then((res) => setGames(res.data))
            .catch((err) => console.error("Ошибка при загрузке игр:", err));
    }, []);

    return (
        <ul>
            {games.map((game) => (
                <li key={game.id}>
                    <strong>{game.title}</strong> — {game.genre.name} —{" "}
                    {game.price}₽
                </li>
            ))}
        </ul>
    );
}
