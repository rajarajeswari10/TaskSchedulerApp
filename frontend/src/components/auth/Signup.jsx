import { Link } from "react-router-dom";
import React, { useState } from 'react';
//import axios from "axios";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  

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
    <div className="container">
      <div className="header">
        <h2 id="main_title"><Link to="/">Register here!</Link></h2>
      </div>
      <div className="form">
        <div className="register">
        <form onSubmit={registration}>
              <input type="email" id="email" placeholder="Enter Email" required value={email} onChange={(e) => handleEmailChange(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Enter valid email" /><br /><br />
              <input type="text" id="firstname" placeholder="Enter First Name" required value={firstName} onChange={(e) =>  handleFirstnameChange(e.target.value)} pattern='^[A-za-z]+$' title="Enter only alphabets" /><br /><br />
              <input type="text" id="lastname" placeholder="Enter Last Name" required value={lastName} onChange={(e) =>  handleLastnameChange(e.target.value)} pattern='^[A-za-z]+$' title="Enter only alphabets" /><br /><br />
              <input type="text" id="mobileNumber" placeholder="Enter Mobilenumber" required value={mobileNumber} onChange={(e) => handleMobileChange(e.target.value)} pattern="^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$" title="Enter valid phone number"/><br /><br />
              <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => handlePasswordChange(e.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required /><br /><br />
             <input type="password" id="confirmPassword" placeholder="Confirm Password" onChange={(e) => handleConfirmPasswordChange(e.target.value)} required /><br /><br />
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
  )
}