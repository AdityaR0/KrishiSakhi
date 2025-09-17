import React from "react";

function ChatbotPage() {
  return (
    // This style forces the container to fill the viewport height
    // minus the approximate height of your header and footer.
    <div style={{ 
      height: 'calc(100vh - 120px)', // Adjust 120px if needed
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <iframe
        src={process.env.REACT_APP_API_URL}
        title="Agri Chatbot"
        style={{ flex: 1, border: "none", width: '100%', height: '100%' }}
      />
    </div>
  );
}

export default ChatbotPage;
