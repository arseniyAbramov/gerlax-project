// pages/Auth/LoginPage.jsx
// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios"; // заменить
import "./AuthPage.css";

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/login", form);
            localStorage.setItem("token", res.data.token);
            navigate("/profile");
        } catch (err) {
            setError(err.response?.data?.message || "Ошибка входа");
        }
    };

    return (
        <div className="auth-page">
            <h2>Вход</h2>
            {error && <p className="auth-error">{error}</p>}
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Войти</button>
            </form>
        </div>
    );
}
