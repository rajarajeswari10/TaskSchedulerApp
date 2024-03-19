import React from 'react';
import { Link } from 'react-router-dom'; 
import './../../styles/Home.css';
import image from './image.jpeg'; // Import the image

const Home = () => {
    return (
        <div>
            <div className="nav-container">
                <h1>Fixit</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/">Services</a>
                    <a href="/" className="move-right">Contact Us</a>
                </nav>
                <Link to="/Login"><button className="login-btn">Login</button></Link> 
                <Link to="/Signup"><button className="signup-btn">Sign Up</button></Link> 
            </div>
            <div className="image-container">
                <img src={image} alt="Image Description" className="background-image" />
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
        </div>
    );
}

export default Home;