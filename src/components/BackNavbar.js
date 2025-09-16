import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackNavbar.css";

function BackNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="back-navbar" aria-label="Primary">
      <div className="nav-title">
        <span role="img" aria-label="leaf" className="nav-icon"></span>
        🌱KrishiSakhi
      </div>
      <button
        onClick={() => navigate("/")}
        className="back-navbar-btn"
        aria-label="Go to Home"
      >
        <span className="back-arrow">←</span> Home
      </button>
    </nav>
  );
}

export default BackNavbar;
