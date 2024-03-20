import { Link } from "react-router-dom";
import React, { useState } from 'react';
import FormInput from "./Forminput";
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
          id='lasttname'
          onChange={(e) =>  handleFirstnameChange(e.target.value)}
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
  )
}