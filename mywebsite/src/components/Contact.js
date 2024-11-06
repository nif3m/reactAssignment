// src/components/Contact.js
import React from 'react';
import '../styles/Contact.css'; // Import the CSS for styling

const Contact = () => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get values from the input fields
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Log the data to the console
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear the form fields
    e.target.reset(); // Reset the form fields
  };

  return (
    <div id="contact" className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone" // Add name attribute to access value
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email" // Add name attribute to access value
            placeholder="Enter your email address"
          />
        </div>

        <div className="form-group">
          <label>Your Message:</label>
          <textarea
            name="message" // Add name attribute to access value
            placeholder="What would you like to say?"
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;