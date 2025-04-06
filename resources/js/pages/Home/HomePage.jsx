import React from "react";
import BestGames from "../../components/BestGames/BestGames";
import GameList from "../../components/GameList";
import Hero from "../../components/Hero/Hero";

export default function HomePage() {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Главная страница — Gerlax 🎮</h1>
            <Hero />
            <BestGames />
            <GameList />
        </div>
    );
}
