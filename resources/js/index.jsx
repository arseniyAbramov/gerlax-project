import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../style.css";
import Header from "./components/Header/Header"; // 👈 добавляем
import HomePage from "./pages/Home/HomePage";

function App() {
    return (
        <Router>
            <Header /> {/* 👈 вставляем сюда */}
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
