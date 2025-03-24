import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-body-secondary fixed-top">
      <div className="container">
        <Link className="navbar-brand font-dark" to="/">Portfolio</Link>
        <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link font-dark" to="/portfolio#about">About</Link></li>
            <li className="nav-item"><Link className="nav-link font-dark" to="/portfolio#projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link font-dark" to="/portfolio#contact">Contact</Link></li>
            <li className="nav-item">
              <button className="btn btn-secondary ms-2" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
