import React, { useState, useEffect } from "react";
import "./styles/navbar.css"; // Ensure you have the correct path to your CSS file
import '../index.css'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isLightMode, setIsLightMode] = useState(false)

  // Apply theme to body when toggled
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [isLightMode]);


  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <img
            src="Logo.png"
            alt="GSK Logo"
          />
        </a>

        {/* Desktop Menu */}
        <nav className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#featured-projects">Projects Done</a></li>
            <li><a href="#skills">My Tools</a></li>
            <li><a href="#contact">Contact me</a></li>
          </ul>
        </nav>

 {/* Theme Toggle Button */}
        <button
          className="theme-toggle"
          onClick={() => setIsLightMode(!isLightMode)}
        >
          {isLightMode ? "🌙 Dark Mode" : "🌞 Light Mode"}
        </button>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};





export default Navbar;