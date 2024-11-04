import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiC, SiCplusplus, SiPython } from 'react-icons/si';
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
            <h3>Tech Stack</h3>
            <ul>
              <li><FaHtml5 className="icon-html" /> HTML</li>
              <li><FaCss3Alt className="icon-css" /> CSS</li>
              <li><FaReact className="icon-react" /> ReactJS</li>
              <li><SiC className="icon-c" /> C</li>
              <li><SiCplusplus className="icon-cplusplus" /> C++</li>
              <li><SiPython className="icon-python" /> Python</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
