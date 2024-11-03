import React, { useState } from 'react';
import "./Navbar.css";
import webimg from "./navimg.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <nav className="navbar">
      <img src={webimg} className="navim" alt="Logo" />

      <div className={`navlinks ${isMenuOpen ? 'active' : ''}`}>
        
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="navbar-buttons">
        
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};



export default Navbar;
