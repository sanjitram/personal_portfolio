import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services">
      <div className="services-container">
        <h2>Skills</h2>
        
        <div className="services-grid">
          <div className="service">
            <span className="service-icon">💻</span>
            <h3>Functional Webpages</h3>
            <p>
              Building responsive and user-friendly websites using modern technologies like React, HTML, and CSS for seamless performance and amazing UI/UX.
            </p>
          </div>
          
          <div className="service">
            <span className="service-icon">📱</span>
            <h3>Responsible Designs</h3>
            <p>
              Delivers a seamless user experience across devices without loss of functionality.
            </p>
          </div>
          
          <div className="service">
            <span className="service-icon">🔧</span>
            <h3>Backend Development</h3>
            <p>
              Designing and building scalable server-side applications, RESTful APIs, and databases to manage backend services and ensure data integrity.
            </p>
            <p>
            (Coming Soon)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
