import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>📅 Meier Tor-Technik Dashboard</h1>
      <p>Herzlich Willkommen! Dies ist eine funktionsfähige Beispiel-App für Vercel.</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
