import React from "react";
import { useNavigate } from "react-router-dom";

function ChatbotPage() {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* The blue header has been removed */}

      {/* Chatbot runs inside iframe */}
      <iframe
        src={process.env.REACT_APP_API_URL}
        title="Agri Chatbot"
        style={{ flex: 1, border: "none" }}
      />
    </div>
  );
}

export default ChatbotPage;
