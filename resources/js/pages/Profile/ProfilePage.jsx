import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import Footer from "../../components/Footer/Footer";
import "./ProfilePage.css";

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");
    const [orders, setOrders] = useState([]); // 👈 заказы
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("/user")
            .then((res) => {
                setUser(res.data);
                setNewName(res.data.name);
            })
            .catch(() => {
                navigate("/login");
            });

        axios
            .get("/orders") // 👈 получаем заказы
            .then((res) => setOrders(res.data))
            .catch((err) => console.error("Ошибка при загрузке заказов", err));
    }, []);

    const handleLogout = async () => {
        try {
            await axios.post("/logout");
            localStorage.removeItem("token");
            navigate("/");
        } catch (err) {
            console.error("Ошибка при выходе:", err);
        }
    };

    const handleSave = async () => {
        try {
            const res = await axios.put("/user", { name: newName });
            setUser(res.data);
            setEditing(false);
        } catch (err) {
            console.error("Ошибка при сохранении:", err);
        }
    };

    if (!user) return <p className="profile__loading">Загрузка...</p>;

    const handleAvatarUpload = async (e) => {
        const formData = new FormData();
        formData.append("avatar", e.target.files[0]);

        try {
            const res = await axios.post("/user/avatar", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setUser((prev) => ({ ...prev, avatar: res.data.avatar }));
        } catch (err) {
            console.error("Ошибка при загрузке аватара", err);
        }
    };
    return (
        <>
            <div className="profile-card">
                {/* 🖼️ Аватар + имя */}
                <div className="profile-card__section profile-card__header">
                    <img
                        src={
                            user.avatar
                                ? `http://localhost:8000/storage/${user.avatar}`
                                : "/default-avatar.png"
                        }
                        alt="avatar"
                        className="profile-card__avatar"
                    />
                    <h2>{user.name}</h2>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarUpload}
                    />
                </div>

                {/* ✏️ Информация */}
                <div className="profile-card__section">
                    <h3>Информация</h3>
                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>
                    {editing ? (
                        <>
                            <input
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                            />
                            <button onClick={handleSave}>Сохранить</button>
                        </>
                    ) : (
                        <button onClick={() => setEditing(true)}>
                            Изменить имя
                        </button>
                    )}
                </div>

                {/* 📦 Заказы */}
                <div className="profile-card__section">
                    <h3>Ваши заказы</h3>
                    {orders.length === 0 ? (
                        <p>Нет заказов</p>
                    ) : (
                        <ul>
                            {orders.map((order) => (
                                <li key={order.id}>
                                    Заказ #{order.id} — {order.total_price}₽ —{" "}
                                    <em>{order.status}</em>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* 🚪 Выход */}
                <div className="profile-card__section profile-card__actions">
                    <button onClick={handleLogout}>Выйти из аккаунта</button>
                </div>
            </div>
            <Footer />
        </>
    );
}
