// src/components/Home.js
import React from 'react';
import '../styles/Home.css'; // Import the external CSS file
import carHero from '../images/home.jpeg'; // Replace with your hero image path

const Home = () => {
  

  return (
    <div className="home-container">
      <h1>Welcome to the Car Website</h1>
      <img src={carHero} alt="Hero Car" className="Logo-pic"/>
      <p>Your one-stop destination for all things cars!</p>
      <button className="learn-more-button" onClick={() => window.location.href="#about"}>
        Learn More
      </button>
    </div>
  );
};

export default Home;