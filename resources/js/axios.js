// axios.js
import axios from "axios";

const instance = axios.create({
    baseURL: "/api",
    headers: {
        Accept: "application/json",
    },
});

// добавляем токен из localStorage, если есть
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    console.log("📦 Отправка запроса с токеном:", token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;
