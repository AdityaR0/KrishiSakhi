// src/components/ChatbotPage.js
import React from "react";
import { useNavigate } from "react-router-dom";

function ChatbotPage() {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "#2563eb", padding: "10px", color: "white" }}>
        <h2>Agri Chatbot</h2>
        <button
          style={{
            marginLeft: "20px",
            padding: "8px 14px",
            borderRadius: "6px",
            border: "none",
            background: "white",
            color: "#2563eb",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          ⬅ Back to Home
        </button>
      </header>

      {/* Chatbot runs inside iframe */}
      <iframe
        src="http://127.0.0.1:5000"   // ⚠️ Replace with your Flask/FastAPI chatbot backend URL
        title="Agri Chatbot"
        style={{ flex: 1, border: "none" }}
      />
    </div>
  );
}

export default ChatbotPage;
