import React from "react";
import BestGames from "../../components/BestGames/BestGames";
import Footer from "../../components/Footer/Footer";
import GenreList from "../../components/GenreList/GenreList";
import Hero from "../../components/Hero/Hero";

export default function HomePage({ onBuy }) {
    return (
        <div>
            {/* style={{ padding: "2rem" }} */}
            <Hero />
            <BestGames onBuy={onBuy} />
            <GenreList />
            <Footer />
        </div>
    );
}
