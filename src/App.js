import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DataEntry from "./components/DataEntry";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("portfolioData");
    if (savedData) {
      setPortfolioData(JSON.parse(savedData));
    }
  }, []);

  return (
    <Router>
      <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <ScrollToSection />
        <Routes>
          <Route path="/" element={<DataEntry setPortfolioData={setPortfolioData} />} />
          <Route
            path="/portfolio"
            element={
              portfolioData ? (
                <>
                  <Hero data={{ ...portfolioData.hero, profilePic: portfolioData.about?.profilePic }} />
                  <div id="about"><About data={portfolioData.about} /></div>
                  <div id="projects"><Projects data={portfolioData.projects} /></div>
                  <div id="contact"><Contact data={portfolioData.contact} /></div>
                  <Footer data={portfolioData.socialMedia} />
                </>
              ) : (
                <p className="text-center">No portfolio data found. Please enter details.</p>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
