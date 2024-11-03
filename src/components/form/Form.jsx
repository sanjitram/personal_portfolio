import React, { useRef } from 'react';
import './Form.css';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hday7dr', 'template_6x5a3ps', form.current, 'pIeh4SZRliB0YX-c8')
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Message sent successfully.");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id="contact">
      <h2>Contact me</h2>
      <h4>Your responses will be sent as an email</h4>
      <form id="conform" ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="your_name" required /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="your_email" pattern="^.*@.*$" required /><br />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="your_phone" pattern="[0-9]{10}" required /><br />

        <label htmlFor="comments">Comments:</label>
        <textarea id="comments" name="comments" rows="3" required></textarea><br />

        <button id="sub" type="submit">Submit</button>
      </form>

      <div className="social-media">
        <h3>Connect with me</h3>
        <a href="https://github.com/sanjitram" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/sanjit-ram-96778a317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        
        
        
      </div>
    </div>
  );
}

export default Form;
