import React, { useState } from 'react';
import "./Navbar.css";
import webimg from "./navimg.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img src={webimg} className="navim" alt="Logo" />

      <div className={`navlinks ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>

      <button id="toggle" onClick={handleToggle}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;

