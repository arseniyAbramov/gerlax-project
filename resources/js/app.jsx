import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Привет из React внутри проекта gerlax-full-app!</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
