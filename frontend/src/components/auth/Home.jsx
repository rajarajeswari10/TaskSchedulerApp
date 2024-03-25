import React, { useState, useEffect , } from 'react';
import { Link } from 'react-router-dom';
import './../../styles/Home.css';
import homepicture from './homepicture.jpeg';
import hvacicon from './hvac.jpg';
import Card from './Card';

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setActiveSection((previousActiveSection) => {
                const scrollPosition = window.scrollY;
                const section1 = document.getElementById('section1');
                const section2 = document.getElementById('section2');
                const section3 = document.getElementById('section3');
    
                const section1Height = section1.offsetHeight;
                const section2Height = section2.offsetHeight;
                const section3Height = section3.offsetHeight;
    
                if (scrollPosition >= section1.offsetTop && scrollPosition < section1.offsetTop + section1Height) {
                    return 'section1';
                } else if (scrollPosition >= section2.offsetTop && scrollPosition < section2.offsetTop + section2Height) {
                    return 'section2';
                } else if (scrollPosition >= section3.offsetTop && scrollPosition < section3.offsetTop + section3Height) {
                    return 'section3';
                }
                return previousActiveSection;
            });
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <div >
            <div className='nav-container'>
                <div className="left-section">
                <img src={homepicture} alt="card image"  />
                <h2>Fixit</h2>
                </div>
                <div className="right-section">
                <nav>
                    <a href="#section1" className={activeSection === 'section1' ? 'active' : ''}>Home</a>
                    <a href="#section2" className={activeSection === 'section2' ? 'active' : ''}>Services</a>
                    <a href="#section3" className={activeSection === 'section3' ? 'active' : ''}>Contact Us</a>
                    <Link to="/Login"><button className="login-btn">Login</button></Link>
                    <Link to="/Signup"><button className="signup-btn">Sign Up</button></Link>
                </nav>
                </div>
            </div>
            <div className="home">
            <section id="section1">
                <div className="image-container">
                    <img src={homepicture} alt="Image Description" className="background-image" />
                    <div className="image-text">
                        <h1>Expert HVAC, Electrical, and Plumbing Services</h1>
                        <p>Your one-stop solution for all repair needs.</p>
                        <div className="search-container">
                            <i className="bi bi-search"></i> {/* Bootstrap search icon */}
                            <input type="text" placeholder="What needs to be done?" className="search-box" />
                            <button className="search-btn">Search</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="section2">
                {/* Content for the Services section */}
                <div className="whyus">
                <h3>Our Services</h3>
                <div className="card-container">
                    <Card icon={hvacicon} title = "HVAC Repair" content="Experienced in AC, heater, and ventilation system repairs."/>
                   <Card icon={hvacicon} title = "Electrical Services" content="Trusted electiricians for wiring, outlet, and fixture installations."/>,
                   <Card icon={hvacicon} title = "Plumbing Solutions" content="Professional plumbers for leak, clog and pipe repairs."/>  
                </div>
            </div>
            </section>

            <section id="section3">
                {/* <div className='services-container'> */}
                <div className="whyus">
                    <h3>Why Choose US?</h3>
                <div className='card-container'>
                   <Card icon={hvacicon} title = "Expert Technicians" content="Experienced and certified in HVAC,electrical and plumbing."/>
                   <Card icon={hvacicon} title = "Reliable Solutions" content="High-quality and long-lasting repairs for your home systems."/>
                   <Card icon={hvacicon} title = "Customer Satisfaction" content="Dedicated to ensuring your comfort and safety with our services."/>
                 
                </div>
                </div>

            </section>
            <div className="home-footer">
                <h4 id="ready-text">Ready to get started?</h4>
                <p id="ready-desc">
                    Contact us for a free consultation and quote.
                </p>
                <div className="contact-us-btn">
                    <Link to="/Login"><button className="login-btn">Book Now</button></Link>
                    <Link to="/Signup"><button className="signup-btn">Contact Us</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
}