import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../../styles/Home.css';
import homepicture from './homepicture.jpeg';

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const section1 = document.getElementById('section1').offsetTop;
            const section2 = document.getElementById('section2').offsetTop;
            const section3 = document.getElementById('section3').offsetTop;

            if (scrollPosition >= section1 && scrollPosition < section2) {
                setActiveSection('section1');
            } else if (scrollPosition >= section2 && scrollPosition < section3) {
                setActiveSection('section2');
            } else if (scrollPosition >= section3) {
                setActiveSection('section3');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='nav-container'>
                <h1 className='brand'>Fixit</h1>
                <nav>
                    <a href="#section1" className={activeSection === 'section1' ? 'active' : ''}>Home</a>
                    <a href="#section2" className={activeSection === 'section2' ? 'active' : ''}>Services</a>
                    <a href="#section3" className={activeSection === 'section3' ? 'active' : ''}>Contact Us</a>
                    <Link to="/Login"><button className="login-btn">Login</button></Link>
                    <Link to="/Signup"><button className="signup-btn">Sign Up</button></Link>
                </nav>
            </div>
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
                <div className="services-container">
                <h2>Our Services</h2>
                <div className="card-container">
                    {/* Card 1 */}
                    <div className="card">
                        <h3>Service 1</h3>
                        <p>Description of service 1</p>
                    </div>
                    {/* Card 2 */}
                    <div className="card">
                        <h3>Service 2</h3>
                        <p>Description of service 2</p>
                    </div>
                    {/* Card 3 */}
                    <div className="card">
                        <h3>Service 3</h3>
                        <p>Description of service 3</p>
                    </div>
                </div>
            </div>
            </section>

            <section id="section3">
                
            </section>
        </div>
    );
}
