import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './../../styles/Login.css';
import FormInput from "./Forminput";
import hvacicon from './hvac.jpg';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);  
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const login = async (e) => {
    e.preventDefault();

    // Login logic here
  };

  const forgotPassword = async () => {
    // Forgot password logic here
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-container">
          <img src={hvacicon} alt="Logo" className="logo" />
        </div>
        <div className="login-form">
          <h3>Welcome to Fixit Home Care Services!</h3>
          <p>Log in to manage your services. Need help?<br/>Contact us at support@fixit.com</p>
          <form onSubmit={login}>
            <label htmlFor="email">Enter Email</label><br/>
            <FormInput
              type='email'
              placeholder='Enter Email'
              required
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
              title="Enter valid email"
              id='email'
              value={email}
              onChange ={(e) => handleEmailChange(e.target.value)}
            />
            <br /> <br />
            
            <label htmlFor="password">Enter Password</label><br/>
            <div className="password-input">
              <FormInput
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter Password'
                required
                pattern='?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}'
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                id='password'
                onChange={(e) =>  handlePasswordChange(e.target.value)}
                value={password}
              />
              <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} eye-icon`} onClick={toggleShowPassword}></i>
            </div>
            <br /> <br />

            <button type="submit" id="loginButton">Login</button>
          </form>
          <div className="forgot-password">
            <Link to="#" className="forgot-password-link" onClick={forgotPassword}>Forgot Password?</Link>
          </div>
        </div>
        <div className="not_a">
          <p>Are you new? &nbsp;<Link to="/Signup" id="signupLink">Create an account</Link></p>
        </div>
      </div>
    </div>
  );
}
