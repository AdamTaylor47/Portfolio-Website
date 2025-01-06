import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = async (formData) => {
    try {
        const response = await axios.post('http://localhost:5000/send-email', formData);
        console.log(response.data); // Handle success
    } catch (error) {
        console.error(error); // Handle error
    }
};

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label>
        Name:
        <input type="text" name="user_name" required />
      </label>
      <label>
        Email:
        <input type="email" name="user_email" required />
      </label>
      <label>
        Message:
        <textarea name="message" required />
      </label>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
