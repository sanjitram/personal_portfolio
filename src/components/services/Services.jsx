import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services">
      <div className="services-container">
        <h1>Skills</h1>
        
        <div className="services-grid">
          <div className="service">
            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-card-front">
                  <span className="service-icon">💻</span>
                  <h1>Functional Webpages</h1>
                  
                </div>
                <div className="service-card-back">
          
                <p>
                    Building responsive and user-friendly websites using modern technologies like React, HTML, and CSS for seamless performance and amazing UI/UX.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="service">
            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-card-front">
                  <span className="service-icon">📱</span>
                  <h1>Responsive Designs</h1>
                  
                </div>
                <div className="service-card-back">
            
                <p>
                    Delivers a seamless user experience across devices without loss of functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="service">
            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-card-front">
                  <span className="service-icon">🔧</span>
                  <h1>Backend Development</h1>
                  
                  <h5>(Coming Soon)</h5>
                </div>
                <div className="service-card-back">
                
                <p>
                    Designing and building scalable server-side applications, APIs, and databases to manage backend services and ensure data integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
