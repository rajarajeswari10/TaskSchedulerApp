import { useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);  
  };

  const login = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password
    };

    const url1 = '';
    const url2 = '';
    const url3 = '';

    try {
        const customerLoginResult = await axios.post(url1, data);
        console.log(customerLoginResult);
      
        if (customerLoginResult.data === true) {
          // Set session storage or any other necessary logic for user login
          alert('User Logged in Successfully');
          navigate('/user/Dashboard');
        } else {
          const technicianLoginResult = await axios.post(url2, data);
      
          if (technicianLoginResult.data === true) {
            // Set session storage or any other necessary logic for technician login
            alert("Technician Logged in Successfully");
            navigate('/technician/Dashboard');
          } else {
            const supervisorLoginResult = await axios.post(url3, data);
      
            if (supervisorLoginResult.data === true) {
              // Set session storage or any other necessary logic for admin login
              alert("Supervisor Logged in Successfully");
              navigate('/supervisor/Dashboard');
            } else {
              alert('Invalid credentials. Please try again!');
            }
          }
        }
      } catch (error) {
        console.log(error);
        alert('An error occurred. Try again later!');
      }
};

const forgotPassword = async () => {
    try {
      const response = await axios.post("", { email });
      if (response.data.success) {
        alert("Password reset email sent. Check your email for instructions.");
      } else {
        alert("Email not found. Please check your email and try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container">
            <div className="header">
              <h2 id="main_title">Scheduler App</h2><br />
            </div>
            <div className="form">
              <div className="login">
                <form onSubmit={login}>
                  <input type="text" id="email" placeholder="Enter email" required className="email" onChange={(e) => handleEmailChange(e.target.value)}/>
                  <br/><br/>
                  <input type="password" id="password" placeholder="Enter Password" required onChange={(e) => handlePasswordChange(e.target.value)} /><br /><br />
                  <button type="submit" id="loginButton">Login</button>
                </form>
                <div className="forgot-password">
                    <Link to="#" className="forgot-password-link" onClick={forgotPassword}>Forgot Password?</Link>
                </div>
            </div>
              <br />
              <div className="not_a">
                <p>New User? &nbsp;<Link to="/Signup" id="signupLink">Sign Up</Link></p>
              </div>
            </div>
    </div>
  );
}