import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h2>About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I’m Sanjit Ram, a computer science undergraduate at IIT (ISM) Dhanbad who is a passionate Web Developer with a knack for building front-end applications. With a strong foundation in front-end development, I created this personal portfolio website by myself.
            </p>
            <p>
              In this project I have worked with HTML, CSS and Javascript. I’m constantly learning new things to stay updated with the latest advancements in technology.
            </p>
            <p>
                This particular webpage uses ReactJS to make it responsive. I used the library EmailJS to enable the client to contact me through email.
            </p>
          </div>

          <div className="skills-list">
            <h3> My Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>ReactJS</li>
            </ul>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default About;
