// pages/Auth/RegisterPage.jsx
// import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios"; // заменить
import "./AuthPage.css";

export default function RegisterPage() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/register", form);
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || "Ошибка регистрации");
        }
    };

    return (
        <div className="auth-page">
            <h2>Регистрация</h2>
            {error && <p className="auth-error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Имя"
                    onChange={handleChange}
                    required
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Зарегистрироваться</button>
            </form>
            <p className="auth-switch">
                Уже есть аккаунт? <Link to="/login">Войти</Link>
            </p>
        </div>
    );
}
