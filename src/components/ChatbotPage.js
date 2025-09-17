import React from "react";

function ChatbotPage() {
  return (
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
