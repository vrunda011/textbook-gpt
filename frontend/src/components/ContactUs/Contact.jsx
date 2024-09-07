import React, { useState } from 'react';
import './Contact.css';
import phoneIcon from '../../assets/Images/phone-call.png';
import emailIcon from '../../assets/Images/mail.png';
import instIcon from '../../assets/Images/instagram.png';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedMessage = `Hi, I am ${name}. ${message}`;

    // Open an email with the formatted message
    const mailtoLink = `mailto:contact@textbookgpt.com?subject=Contact Us&body=${encodeURIComponent(formattedMessage)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='contact-section'>
      <div className='contact-left'>
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Get in touch with us using the form below or reach out to us through any of the methods provided.</p>
        <div className='contact-info'>
          <div className='contact-info-item'>
            <img src={phoneIcon} alt="Phone Icon" className='contact-icon' />
            <span>+91 123 456 7890</span>
          </div>
          <div className='contact-info-item'>
            <img src={emailIcon} alt="Email Icon" className='contact-icon' />
            <span>contact@textbookgpt.com</span>
          </div>
          <div className='contact-info-item'>
            <img src={instIcon} alt="Instagram Icon" className='contact-icon' />
            <span>@textbookgpt</span>
          </div>
        </div>
      </div>
      <div className='contact-right'>
        <h3>Have a Question?</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;