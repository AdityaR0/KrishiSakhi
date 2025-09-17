import React from "react";
import "./ChatbotButton.css";

function ChatbotButton() {
  return (
    <button
      className="chatbot-btn"
      // This opens your live backend URL in a new tab
      onClick={() => window.open(process.env.REACT_APP_API_URL, "_blank")}
    >
      🤖 Chat
    </button>
  );
}

export default ChatbotButton;
