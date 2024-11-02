import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Home.css'
import meimg from './me.jpg'

const Home = () => {
  const typedRef = useRef(null); 

  useEffect(() => {
  
    const options = {
      strings: ["sanjitRam", "a webDeveloper", "available"],
      typeSpeed: 100,  
      backSpeed: 30,    
      backDelay: 3000, 
      loop: true,       
    };

    
    typedRef.current = new Typed('.typing-element', options);

    
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
      <h1 className="typing-element"></h1> {}
      <p>Welcome to my personal portfolio website. Check it out and get in touch!</p>
    </div>
  );
};

export default Home;
