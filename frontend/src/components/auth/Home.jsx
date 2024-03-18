import React from 'react';
import { Link } from 'react-router-dom'; 
import './../../styles/Home.css';

const Home = () => {
    return (
        <div>
            <div className="nav-container">
                <h1>Fixit</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/" className="move-right">Work</a>
                    <a href="/" className="move-right">Info</a>
                </nav>
                <Link to="/Login"><button className="login-btn">Login</button></Link> 
                <Link to="/Signup"><button className="signup-btn">Sign Up</button></Link> 
            </div>
        </div>
    );
}

export default Home;
