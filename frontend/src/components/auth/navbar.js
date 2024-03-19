// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
 const [activeSection, setActiveSection] = useState('');


 useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
     
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 0.5) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 return (
    <nav className="nav-container">
      
       <a className={activeSection === 'section1' ? 'active' : ''} href="#section1">Home</a>
       <a className={activeSection === 'section2' ? 'active' : ''}href="#section2">Services</a>
       <a className={activeSection === 'section3' ? 'active' : ''}href="#section3">Contact us</a>
      <Link to="/Login"><button className="login-btn">Login</button></Link> 
      <Link to="/Signup"><button className="signup-btn">Sign Up</button></Link> 
    </nav>
 );
};

export default Navbar;
