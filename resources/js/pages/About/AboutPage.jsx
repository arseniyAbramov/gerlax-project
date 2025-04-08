// pages/About/AboutPage.jsx

import { Heart, MessageSquare, Star, Users } from "lucide-react";
import React from "react";
import Footer from "../../components/Footer/Footer";
import "./AboutPage.css";

export default function AboutPage() {
    return (
        <>
            <section className="about">
                <div className="about__hero">
                    <h1>О нас</h1>
                    <p>Gerlax — твой мир игр, который мы строим с душой</p>
                </div>

                <div className="about__intro">
                    <img src="/logo-mechta.svg" alt="Gerlax Logo" />
                    <p>
                        Мы — команда энтузиастов, объединившаяся вокруг любви к
                        играм. Наша цель — сделать покупку игр приятной, удобной
                        и честной.
                    </p>
                </div>

                <div className="about__features">
                    <div className="about__feature">
                        <Star size={32} />
                        <h3>Лучшие игры</h3>
                        <p>Мы отбираем только топовые и актуальные тайтлы.</p>
                    </div>
                    <div className="about__feature">
                        <Heart size={32} />
                        <h3>Честные цены</h3>
                        <p>Без переплат и скрытых комиссий — всё прозрачно.</p>
                    </div>
                    <div className="about__feature">
                        <MessageSquare size={32} />
                        <h3>Поддержка 24/7</h3>
                        <p>Мы всегда готовы помочь тебе в чате или по почте.</p>
                    </div>
                    <div className="about__feature">
                        <Users size={32} />
                        <h3>Сообщество</h3>
                        <p>Присоединяйся к нам в Discord и Telegram!</p>
                    </div>
                </div>

                <div className="about__contacts">
                    <h2>Связь с нами</h2>
                    <ul>
                        <li>Email: support@gerlax.games</li>
                        <li>Telegram: @gerlax_support</li>
                        <li>Discord: Gerlax Community</li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    );
}
