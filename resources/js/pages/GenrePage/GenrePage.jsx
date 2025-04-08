// pages/GenrePage/GenrePage.jsx

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../context/CartContext";
// import "../BestGames/BestGames.css"; // 👈 для карточек

export default function GenrePage({ onBuy }) {
    const { slug } = useParams();
    const { addToCart } = useCart();
    const [games, setGames] = useState([]);
    const [genreName, setGenreName] = useState("");

    useEffect(() => {
        axios
            .get(`/api/genres/${slug}/games`)
            .then((res) => {
                setGames(res.data);
                if (res.data.length > 0) {
                    setGenreName(res.data[0].genre.name);
                } else {
                    setGenreName(slug);
                }
            })
            .catch((err) =>
                console.error("Ошибка при загрузке игр жанра:", err)
            );
    }, [slug]);

    return (
        <>
            <section className="best-games">
                <h2 className="best-games__title">Игры жанра: {genreName}</h2>
                <div className="best-games__list">
                    {games.map((game) => (
                        <Link
                            to={`/genres/${slug}/game/${game.id}`}
                            className="best-games__card-link"
                            key={game.id}
                        >
                            <article className="best-games__card">
                                <img
                                    src={game.poster}
                                    alt={game.title}
                                    className="best-games__poster"
                                />
                                <h3 className="best-games__name">
                                    {game.title}
                                </h3>
                                <p className="best-games__price">
                                    {game.price}₽
                                </p>
                                <button
                                    className="best-games__buy"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        addToCart(game);
                                        onBuy();
                                    }}
                                >
                                    Купить
                                </button>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}
