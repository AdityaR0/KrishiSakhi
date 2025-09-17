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

// This new component will hide the chat button on the chatbot page
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

// It's cleaner to move the large homepage content into its own component
const HomePageContent = ({ scrollPercent, showTopBtn }) => {
  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${scrollPercent}%` }} />
      {/* Hero Section */}
      <section id="hero" className="hero-section" style={{ backgroundImage: `url(${heroBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.7)', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '165px 20px' }}>
        <div className="hero-content" style={{ textAlign: 'center' }}>
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
              <li><strong>Crop Recommendation Model:</strong> Takes user-input details such as nitrogen, potassium, phosphorous levels, temperature, humidity, and pH of the soil. Using this information, it predicts the most suitable crop varieties that can be grown, ensuring optimal yield and resource utilization.</li>
              <li><strong>Plant Disease Detection:</strong> Keeping your plants healthy is crucial for a successful harvest. Our second ML model is designed to identify and diagnose plant diseases. Users can upload images of their plants, and the model will provide instant feedback, helping farmers take timely action to protect their crops.</li>
              <li><strong>Fertilizer Recommender:</strong> Recommends the Fertilizer Required for the plant based on disease detected and the type of soil. (Yet to release)</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-title features-title">Features</div>
        <div className="features-cards">
          <div className="feature-card">
            <img src={cropImg} alt="Crop Recommendation" className="feature-img" />
            <div className="feature-content">
              <b>Crop Yield</b>
              <p>Recommendation about the type of crops to be cultivated which is best suited for the respective conditions.</p>
              <Link to="/crop-yield"><button className="details-btn">🌱View Details</button></Link>
            </div>
          </div>
          <div className="feature-card">
            <img src={fertilizerImg} alt="Fertilizer Recommender" className="feature-img" />
            <div className="feature-content">
              <b>Fertilizer Suggestion</b>
              <p>Recommendation about the type of fertilizer best suited for the particular soil and the recommended crop.</p>
              <Link to="/fertilizer"><button className="details-btn">🧪View Details</button></Link>
            </div>
          </div>
          <div className="feature-card">
            <img src={diseaseImg} alt="Plant Disease Detection" className="feature-img" />
            <div className="feature-content">
              <b>Crop Disease</b>
              <p>Predicting the name and causes of crop disease and suggestions to cure it.</p>
              <Link to="/disease-detection"><button className="details-btn">🩺View Details</button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Resources Section */}
      <section className="resources-section">
        <div className="section-title">Resources</div>
        <div className="resources-grid">
          <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer" className="resource-card">
            <div className="resource-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg></div>
            <h3>Government Schemes</h3>
            <p>Official information on farmer support programs and subsidies.</p>
          </a>
          <a href="https://agmarknet.gov.in/" target="_blank" rel="noopener noreferrer" className="resource-card">
            <div className="resource-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0a9 9 0 0118 0m-18 0v.75A.75.75 0 003 6h.75m0 0v-.75A.75.75 0 003 4.5h-.75m16.5 0a9 9 0 01-18 0m18 0v.75a.75.75 0 01-.75.75h-.75m0 0v-.75a.75.75 0 01.75-.75h.75m0 0h-.75a.75.75 0 00-.75.75v.75m-4.5 0a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" /></svg></div>
            <h3>Market Prices</h3>
            <p>Check the latest mandi (market) prices for various crops.</p>
          </a>
          <a href="https://mausam.imd.gov.in/responsive/agromet_adv_ser_state_current.php" target="_blank" rel="noopener noreferrer" className="resource-card">
            <div className="resource-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-9.75 2.148A4.5 4.5 0 002.25 15z" /></svg></div>
            <h3>Weather Advisory</h3>
            <p>Access district-level agrometeorological advisories.</p>
          </a>
          <a href="https://krishijagran.com/" target="_blank" rel="noopener noreferrer" className="resource-card">
            <div className="resource-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V21h-3.375m-13.5 0h3.375c.621 0 1.125-.504 1.125-1.125V7.5h-3.375a1.125 1.125 0 00-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" /></svg></div>
            <h3>Farming News</h3>
            <p>Stay updated with the latest news and best practices.</p>
          </a>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="contact-section">
        <div className="section-title contact-title">Contact Us</div>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Have questions or need support?<br />Reach out to us using the form or via the details below.<br /><br /><strong>Email:</strong> support@KrishiSakhi<br /><strong>Phone:</strong> +91-12345-67890<br /><strong>Address:</strong><br />1st Floor, Agri Tower,<br />Innovation Park, Mumbai, India</p>
          </div>
          <form className="contact-form">
            <label>Name<input type="text" placeholder="Your Name" required /></label>
            <label>Email<input type="email" placeholder="Your Email" required /></label>
            <label>Message<textarea placeholder="Your Message" required></textarea></label>
            <button type="submit" className="contact-btn">Send</button>
          </form>
        </div>
      </section>

      {/* Back To Top Button */}
      {showTopBtn && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to Top" title="Back to Top">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#2563eb" /><path d="M8 14l4-4 4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      )}
    </>
  );
};

export default App;
