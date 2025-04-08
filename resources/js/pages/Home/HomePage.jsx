import React from "react";
import BestGames from "../../components/BestGames/BestGames";

import Hero from "../../components/Hero/Hero";

export default function HomePage({ onBuy }) {
    return (
        <div>
            {/* style={{ padding: "2rem" }} */}
            <Hero />
            <BestGames onBuy={onBuy} />
        </div>
    );
}
