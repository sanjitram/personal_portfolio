import React, { useEffect } from 'react';
import './dark.css'

const Darkmode = () => {
  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }, []);

  return (
    <button onClick={toggleTheme}>Toggle Dark Mode</button>
  );
};

export default Darkmode;
