// src/components/Navbar.js
import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Cars from './Cars';
import Contact from './Contact';
import logo from '../images/download.png'; // Import your logo image

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav>
        <img src={logo} alt="Car Website Logo" style={{ width: '150px', height: 'auto', marginBottom: '10px' }} />
        <ul>
          <li>
            <button onClick={() => handlePageChange('Home')}>Home</button>
          </li>
          <li>
            <button onClick={() => handlePageChange('About')}>About</button>
          </li>
          <li>
            <button onClick={() => handlePageChange('Cars')}>Cars</button>
          </li>
          <li>
            <button onClick={() => handlePageChange('Contact')}>Contact</button>
          </li>
        </ul>
      </nav>
      <div>
        {currentPage === 'Home' && <Home />}
        {currentPage === 'About' && <About />}
        {currentPage === 'Cars' && <Cars />}
        {currentPage === 'Contact' && <Contact />}
      </div>
    </div>
  );
};

export default Navbar;