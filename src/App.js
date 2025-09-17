import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LoginSignupPage from "./components/LoginSignupPage";
import PredictionsPage from "./components/PredictionsPage";
import ViewInsightsPage from "./components/ViewInsightsPage";
import ChatbotPage from "./components/ChatbotPage";
import ChatbotButton from "./components/ChatbotButton";
import farmerVideo from "./components/asset/farmer_video.mp4";
import heroBackgroundImage from "./components/asset/hero_background.jpg";
import WeatherWidget from "./components/WeatherWidget";
import CommunityPage from "./components/CommunityPage";
import FarmProfile from "./components/FarmProfile";
import ActivityLog from "./components/ActivityLog";
import Navbar from "./components/Navbar";
import BackNavbar from "./components/BackNavbar";
import Footer from "./components/Footer";
import "./App.css";
import CropYieldPage from "./components/CropYieldPage";
import FertilizerPage from "./components/FertilizerPage";
import DiseaseDetectionPage from "./components/DiseaseDetectionPage";
import cropImg from "./components/asset/crop.png";
import fertilizerImg from "./components/asset/fertilizer.png";
import diseaseImg from "./components/asset/disease.png";

// This component switches the navbar based on the current page
function NavbarSwitcher() {
  const location = useLocation();
  return location.pathname === "/" ? <Navbar /> : <BackNavbar />;
}

// This component hides the chat button on the chatbot page
function ConditionalChatbotButton() {
  const location = useLocation();
  return location.pathname !== "/chatbot" ? <ChatbotButton /> : null;
}

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 200);
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(percent);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <NavbarSwitcher />
      {/* The <main> tag must wrap the <Routes> to fix the layout on all pages */}
      <main>
        <Routes>
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/login" element={<LoginSignupPage />} />
          <Route path="/predictions" element={<PredictionsPage />} />
          <Route path="/View Insights" element={<ViewInsightsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/profile" element={<FarmProfile />} />
          <Route path="/log" element={<ActivityLog />} />
          <Route path="/crop-yield" element={<CropYieldPage />} />
          <Route path="/fertilizer" element={<FertilizerPage />} />
          <Route path="/disease-detection" element={<DiseaseDetectionPage />} />
          
          {/* Homepage Route */}
          <Route
            path="/"
            element={<HomePageContent scrollPercent={scrollPercent} showTopBtn={showTopBtn} />}
          />
        </Routes>
      </main>
      <Footer />
      <ConditionalChatbotButton />
    </Router>
  );
}

// This component holds all the content for the homepage
const HomePageContent = ({ scrollPercent, showTopBtn }) => {
  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${scrollPercent}%` }} />
      {/* Hero Section */}
      <section id="hero" className="hero-section" style={{ backgroundImage: `url(${heroBackgroundImage})`}}>
        <div className="hero-content">
          <h1>SMART FARMING <span className="blue">MADE SIMPLE</span> WITH<span className="blue"> AI</span></h1>
          <p>KrishiSakhi helps farmers grow better crops, choose the right fertilizers, and fight plant diseases — all with the power of machine learning.</p>
          <div>
            <a href="/profile" className="hero-btn">👤 Farm Profile</a>
            <a href="/Community" className="hero-btn" rel="noopener noreferrer">🤝Farmer Community</a>
          </div>
        </div>
        <WeatherWidget />
      </section>

      {/* About Us Section */}
      <section id="about" className="why-section">
        <div className="section-title about-title">About Us</div>
        <div className="why-card">
          <video src={farmerVideo} autoPlay loop muted playsInline className="why-img">
            Your browser does not support the video tag.
          </video>
          <div>
            <h2>WHY KrishiSakhi ?</h2>
            <p>KrishiSakhi is an integrated platform that combines three powerful machine learning models to assist farmers, hobbyists, and agriculture enthusiasts.</p>
            <ol>
              <li><strong>Crop Recommendation Model:</strong> Takes user-input details...</li>
              <li><strong>Plant Disease Detection:</strong> Keeping your plants healthy is crucial...</li>
              <li><strong>Fertilizer Recommender:</strong> Recommends the Fertilizer Required...</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-title features-title">Features</div>
        <div className="features-cards">
            {/* Feature Cards */}
        </div>
      </section>

      {/* ... (rest of your homepage sections) ... */}

      {/* Back To Top Button */}
      {showTopBtn && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {/* ... svg icon ... */}
        </button>
      )}
    </>
  );
};

export default App;
