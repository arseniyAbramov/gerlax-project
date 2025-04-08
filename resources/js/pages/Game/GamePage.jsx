import axios from "axios";
import { Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";
import "./GamePage.css";

export default function GamePage({ onBuy }) {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [relatedGames, setRelatedGames] = useState([]);

    const { addToCart } = useCart();
    const { toggleFavorite, favorites } = useFavorites();

    useEffect(() => {
        axios.get(`/api/games/${id}`).then((res) => {
            setGame(res.data);

            const genreSlug = res.data.genre?.slug;
            if (genreSlug) {
                axios.get(`/api/genres/${genreSlug}/games`).then((r) => {
                    const filtered = r.data.filter((g) => g.id !== res.data.id);
                    setRelatedGames(filtered.slice(0, 4));
                });
            }
        });
    }, [id]);

    if (!game) return <p>Загрузка...</p>;

    const isFavorite = favorites.some((g) => g.id === game.id);

    const handleToggleFavorite = () => {
        toggleFavorite(game);
        const alreadyFav = favorites.some((g) => g.id === game.id);
        toast(
            alreadyFav ? "❌ Удалено из избранного" : "❤️ Добавлено в избранное"
        );
    };

    return (
        <>
            <div className="game-page">
                <div className="game-page__top">
                    <img
                        src={game.poster}
                        alt={game.title}
                        className="game-page__poster"
                    />
                    <div className="game-page__info">
                        <h1>{game.title}</h1>

                        <div className="game-page__price-row">
                            <p className="game-page__price">{game.price}₽</p>
                            <button
                                onClick={handleToggleFavorite}
                                className="game-page__favorite"
                            >
                                <Heart color={isFavorite ? "red" : "#666"} />
                            </button>
                        </div>

                        <button
                            className="game-page__buy"
                            onClick={() => {
                                addToCart(game);
                                onBuy?.();
                            }}
                        >
                            Купить игру
                        </button>
                    </div>
                </div>

                <div className="game-page__description">
                    <h2>Описание</h2>
                    <p>{game.description || "Описание отсутствует."}</p>
                </div>

                <div className="game-page__related">
                    <h2>Похожие игры</h2>
                    <div className="game-page__related-list">
                        {relatedGames.map((g) => (
                            <Link
                                key={g.id}
                                to={`/game/${g.id}`}
                                className="game-card"
                            >
                                <img src={g.poster} alt={g.title} />
                                <h3>{g.title}</h3>
                                <p>{g.price}₽</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
