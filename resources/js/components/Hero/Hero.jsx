import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Hero.css";

const slides = [
    {
        title: "Новая эпоха гейминга",
        text: "Погрузись в мир новинок, не выходя из дома.",
        link: "/catalog",
        img: "/hero-slide-1.png",
    },
    {
        title: "Лучшие RPG всех времён",
        text: "Найди свою игру среди легенд жанра.",
        link: "/rpg",
        img: "/hero-slide-2.png",
    },
    {
        title: "Инди — тоже искусство",
        text: "Открой для себя душевные игры от малых студий.",
        link: "/indie",
        img: "/hero-slide-3.png",
    },
];

export default function Hero() {
    return (
        <section className="hero">
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 4000, // ⏱ 4 секунды между слайдами
                    pauseOnMouseEnter: true, // 🖱 пауза при наведении
                    disableOnInteraction: false, // 🔁 продолжать после свайпа
                }}
                className="hero__swiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="hero__slide hero__slide--with-bg"
                            style={{ backgroundImage: `url(${slide.img})` }}
                        >
                            <div className="hero__overlay" />

                            <div className="hero__content">
                                <h2 className="hero__title">{slide.title}</h2>
                                <p className="hero__text">{slide.text}</p>
                                <a href={slide.link} className="hero__btn">
                                    Смотреть
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
