// src/components/ChatbotButton.js
import React from "react";
import "./ChatbotButton.css";

function ChatbotButton() {
  return (
    <button
      className="chatbot-btn"
      onClick={() => window.open("http://127.0.0.1:5000", "_blank")}  
      // 👆 Opens chatbot backend in NEW TAB
    >
      🤖 Chat
    </button>
  );
}

export default ChatbotButton;
