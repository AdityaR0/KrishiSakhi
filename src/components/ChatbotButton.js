// src/components/ChatbotButton.js
import React from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import "./ChatbotButton.css";

function ChatbotButton() {
  const navigate = useNavigate(); // 2. Initialize the navigate function
  return (
    <button
      className="chatbot-btn"
      onClick={() => navigate("/chatbot")} // 3. Use navigate to go to the chatbot page
    >
      🤖 Chat
    </button>
  );
}

export default ChatbotButton;
