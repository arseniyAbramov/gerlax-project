import axios from "axios";
import { Car, Gamepad2, Ghost, Swords, Trophy } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./GenreList.css";

const genreIcons = {
    Action: <Gamepad2 size={40} />,
    RPG: <Swords size={40} />,
    Спортивные: <Trophy size={40} />,
    Гонки: <Car size={40} />,
    Хорроры: <Ghost size={40} />,
};

export default function GenreList() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios
            .get("/api/genres")
            .then((res) => setGenres(res.data))
            .catch((err) => console.error("Ошибка при получении жанров:", err));
    }, []);

    return (
        <section className="genres">
            <h2 className="genres__title">Игры по категориям</h2>
            <div className="genres__list">
                {genres.map((genre) => (
                    <Link
                        key={genre.id}
                        to={`/genres/${genre.slug}`}
                        className="genres__item"
                    >
                        <div className="genres__icon">
                            {genreIcons[genre.name] || <Gamepad2 size={40} />}
                        </div>
                        <span className="genres__name">{genre.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
