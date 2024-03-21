import { Link } from "react-router-dom";
import React, { useState } from 'react';
import FormInput from "./Forminput";

import './../../styles/Signup.css';


export default function Signup() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleEmailChange = (value) => {
      setEmail(value.toLowerCase());
    }
    const handleFirstnameChange = (value) => {
      setFirstName(value);
    }
    const handleLastnameChange = (value) => {
      setLastName(value);
    }
    const handleMobileChange = (value) => {
      setMobile(value);
    }
    const handlePasswordChange = (value) => {
      setPassword(value);
    }
    const handleConfirmPasswordChange = (value) => {
      setConfirmPassword(value);
    }
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };
  
  const registration = async (e) => {
    e.preventDefault();
    /*const data = { 
        email: email,
        firstname: firstName,
        lastname: lastName,
        mobileNumber: mobileNumber,
        password: password
    };*/
    
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
  }

return (
  <div className="signup-page">
    <div className="signup-container">
      <h3>Welcome to Fixit Home Care Services!</h3>
      <p>Sign Up to avail our services</p>
      <div className="login">
        <form onSubmit={registration}>

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

          <FormInput
          type='text'
          placeholder='Enter First Name'
          required
          pattern='^[A-za-z]+$'
          title="Enter only alphabets"
          id='firstname'
          onChange={(e) =>  handleFirstnameChange(e.target.value)}
          value={firstName}
          />
          <br /> <br />

          <FormInput
          type='text'
          placeholder='Enter Last Name'
          required
          pattern='^[A-za-z]+$'
          title="Enter only alphabets"

          id='lastname'
          onChange={(e) =>  handleLastnameChange(e.target.value)}

          value={lastName}
          />
          <br /> <br />

          <FormInput
          type='text'
          placeholder='Enter Mobile Number'
          required
          pattern='^[A-za-z]+$'
          title="Enter valid phone number"
          id='mobileNumber'
          onChange={(e) => handleMobileChange(e.target.value)}
          value={mobileNumber}
          />
          <br /> <br />


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
          <br /> 
          <div className="confirm-password-input">
              <FormInput
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='Confirm Password'
                required
                id='confirmPassword'
                onChange={(e) =>  handleConfirmPasswordChange(e.target.value)}
              />
              <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'} eye-icon`} onClick={toggleShowConfirmPassword}></i>
            </div>
          <br /><br />

          <button type="submit" id="signupButton">Sign Up</button>
        </form>
      </div>
      <br />
      <div className="not_a">
        <p>Already have an account? &nbsp;<Link to="/Login" id="loginLink">Login</Link></p>

          <FormInput
          type='password'
          placeholder='Password'
          required
          pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters."
          id='password'
          onChange={(e) => handlePasswordChange(e.target.value)}
          />
          <br /> <br />

          <FormInput
          type='password'
          placeholder='Confirm password'
          required
          id='confirmPassword'
          onChange={(e) => handleConfirmPasswordChange(e.target.value)}
          />
          <br /> <br />
            <button type="submit" id="submitButton"> Register </button>
          </form>
        </div>
        <br />
        <div className="not_a">
          <p>
            Already a user? &nbsp;
            <Link id="signinLink" to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);
}