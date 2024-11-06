// src/components/About.js
import React from 'react';
import '../styles/About.css'; // Import the CSS for About component
import missionImage from '../images/mission.jpeg'; // Replace with your mission image path
import passionImage from '../images/passion.jpeg'; // Replace with your passion image path
import teamImage from '../images/download.jpeg'; // Replace with your team image path

const About = () => {
  return (
    <div id="about" className="about-container">
      <h1>About Us</h1>
      
      <section>
        <h2>Our Mission</h2>
        <img src={missionImage} alt="Our Mission" className="about-image" />
        <p>
          At Nifemi Cars, our mission is to be the ultimate destination for car enthusiasts. 
          We strive to provide you with the latest news, in-depth reviews, and insightful articles 
          that help you make informed decisions about your automotive needs. Whether you're a seasoned 
          car lover or just starting your journey, we have something for everyone.
        </p>
      </section>

      <section>
        <h2>Our Passion</h2>
        <img src={passionImage} alt="Our Passion for Cars" className="about-image" />
        <p>
          Cars are not just machines; they are a way of life. Our team is made up of passionate 
          individuals who live and breathe cars. From classic models to the latest innovations, 
          we explore every facet of the automotive world. We believe that every car has a story, 
          and we are here to share those stories with you.
        </p>
      </section>

      <section>
        <h2>What We Offer</h2>
        <p>
          Our website features a wide range of content, including:
        </p>
        <ul>
          <li><strong>Latest News:</strong> Stay updated with the newest releases, industry trends, and automotive events.</li>
          <li><strong>In-Depth Reviews:</strong> Read comprehensive reviews of the latest cars, helping you choose the right vehicle for your needs.</li>
          <li><strong>Guides and Tips:</strong> Access helpful guides on car maintenance, buying tips, and driving advice.</li>
          <li><strong>Community Engagement:</strong> Join our community of car enthusiasts, share your experiences, and connect with like-minded individuals.</li>
        </ul>
      </section>

      <section>
        <h2>Meet the Team</h2>
        <img src={teamImage} alt="Our Team" className="about-image" />
        <p>
          Our team is a diverse group of automotive enthusiasts, writers, and industry experts. 
          Each member brings a unique perspective and expertise, ensuring that our content is 
          both informative and engaging. We are dedicated to fostering a welcoming environment 
          where everyone can share their love for cars.
        </p>
      </section>

      <section>
        <h2>Join Us on This Journey</h2>
        <p>
          Thank you for visiting [Your Website Name]! We invite you to explore our content, 
          engage with our community, and share your thoughts with us. Your feedback is invaluable 
          as we continue to grow and improve. If you have any questions, suggestions, or just want 
          to chat about cars, feel free to reach out. We would love to hear from you!
        </p>
      </section>
    </div>
  );
};

export default About;