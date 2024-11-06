// src/components/Cars.js
import React from 'react';
import '../styles/Cars.css'; // Import the external CSS file
import car1 from '../images/cars1.jpeg'; // Replace with your car image path
import car2 from '../images/cars2.jpeg'; // Replace with your car image path
import car3 from '../images/cars3.jpeg'; // Replace with your car image path
import car4 from '../images/cars4.jpeg'; // Replace with your car image path

const Cars = () => {
  return (
    <div className="cars-container">
      <h1>Our Cars</h1>
      <div className="car-grid">
        <div className="car-card">
          <img src={car1} alt="Car 1" />
          <h2>Car 1: Toyota Camry</h2>
          <p>The Toyota Camry is a mid-size car known for its reliability and comfort.</p>
        </div>
        <div className="car-card">
          <img src={car2} alt="Car 2" />
          <h2>Car 2: Honda Civic</h2>
          <p>The Honda Civic is a compact car praised for its fuel efficiency and handling.</p>
        </div>
        <div className="car-card">
          <img src={car3} alt="Car 3" />
          <h2>Car 3: Ford Mustang</h2>
          <p>The Ford Mustang is a sports car iconic for its power and style.</p>
        </div>
        <div className="car-card">
          <img src={car4} alt="Car 4" />
          <h2>Car 4: Nissan Altima</h2>
          <p>The Nissan Altima is a mid-size car recognized for its comfort and features.</p>
        </div>
      </div>
    </div>
  );
};

export default Cars;