// pages/SearchPage/SearchPage.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./SearchPage.css";

export default function SearchPage() {
    const [params] = useSearchParams();
    const [results, setResults] = useState([]);
    const query = params.get("q");

    useEffect(() => {
        if (!query) return;
        axios.get("/api/games").then((res) => {
            const filtered = res.data.filter((game) =>
                game.title.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered);
        });
    }, [query]);

    return (
        <>
            <section className="search-results">
                <h2>Результаты по запросу: “{query}”</h2>
                {results.length === 0 ? (
                    <p>Ничего не найдено 😕</p>
                ) : (
                    <div className="search-results__list">
                        {results.map((game) => (
                            <Link
                                to={`/game/${game.id}`}
                                key={game.id}
                                className="game-card"
                            >
                                <img src={game.poster} alt={game.title} />
                                <h3>{game.title}</h3>
                                <p>{game.price}₽</p>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
}
