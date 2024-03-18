import React from 'react';
import { Link } from 'react-router-dom'; 
import './../../styles/Home.css';

const Home = () => {
    return (
        <div>
            <header>
                <h1>Your Service Name</h1>
            </header>

            <nav>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Work</a>
                <a href="/">Info</a>
                <Link to="/login"><button>Get Started</button></Link> 
            </nav>
            
           
        </div>
    );
}

export default Home;
