// src/components/ChatbotPage.js

import React from "react";
// No longer need useNavigate if the main navbar handles it

function ChatbotPage() {
  return (
    // This div no longer needs a fixed height
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <iframe
        src={process.env.REACT_APP_API_URL}
        title="Agri Chatbot"
        style={{ flex: 1, border: "none" }}
      />
    </div>
  );
}

export default ChatbotPage;
