import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Home.css'
import meimg from './me.jpg'

const Home = () => {
  const typedRef = useRef(null); // Create a reference for the Typed instance

  useEffect(() => {
    // Options for Typed.js
    const options = {
      strings: ["sanjitRam", "a webDeveloper", "available"],
      typeSpeed: 100,  // Speed of typing in milliseconds
      backSpeed: 30,    // Speed of backspacing in milliseconds
      backDelay: 3000,  // Delay before starting to backspace
      loop: true,       // Enable looping through the strings
    };

    // Initialize Typed.js on the ref element
    typedRef.current = new Typed('.typing-element', options);

    // Cleanup function to destroy Typed instance on unmount
    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      <img src={meimg} className="mee" alt="face" />
      <div>
        <h1>I'm</h1>
      </div>
      <h1 className="typing-element"></h1> {/* This is where Typed.js will inject the typing effect */}
      <p>Welcome to my personal portfolio website. Check it out and get in touch!</p>
    </div>
  );
};

export default Home;
