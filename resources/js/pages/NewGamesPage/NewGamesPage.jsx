// pages/NewGames/NewGamesPage.jsx

// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios"; // заменить
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../context/CartContext";
import "./NewGamesPage.css";

export default function NewGamesPage({ onBuy }) {
    const [games, setGames] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        axios
            .get("/games")
            .then((res) => {
                console.log("GAMES DATA:", res.data);
                setGames(res.data.slice(0, 12));
            })
            .catch((err) => console.error("Ошибка при получении игр:", err));
    }, []);
    return (
        <>
            <section className="new-games">
                <h2 className="new-games__title">🆕 Новинки</h2>
                <div className="new-games__list">
                    {Array.isArray(games) &&
                        games.map((game) => (
                            <Link
                                to={`/game/${game.id}`}
                                key={game.id}
                                className="new-games__card-link"
                            >
                                <article className="new-games__card">
                                    <img src={game.poster} alt={game.title} />
                                    <h3>{game.title}</h3>
                                    <p>{game.price}₽</p>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            addToCart(game);
                                            onBuy?.(); // если передали
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
