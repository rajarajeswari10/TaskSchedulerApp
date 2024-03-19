import React from 'react';

import './../../styles/Home.css';
import image from './image.jpeg'; // Import the image
import Navbar from './navbar';

const Home = () => {
    return (
        <div>
            
              <Navbar/>
            
            <section id='section1'>
            <div className="image-container">
                <img src={image} alt=" Description" className="background-image" />
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
            <section id='section2'>
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
            <section id='section3'>
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
        </div>
    );
}

export default Home;