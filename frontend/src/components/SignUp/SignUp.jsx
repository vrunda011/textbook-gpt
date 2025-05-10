import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  
  const navigate = useNavigate(); // Initialize navigate hook

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (state === "Sign Up") {
        await axios.post('http://localhost:5000/signup', formData);
        alert("Sign up successful! Please log in.");
        setState("Login");
      } else {
        const response = await axios.post('http://localhost:5000/login', formData);
        navigate('/standard'); // Navigate to Standard page on successful login
      }
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            {state === "Sign Up" && <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" required />}
            <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" required />
            <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" required />
          </div>
          {state === "Sign Up" && 
            <div className="loginsignup-agree">
              <input type="checkbox" required />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
          }
          <button type="submit">Continue</button> {/* This button now handles navigation */}
        </form>
        {state === "Sign Up" ?
          <p className="lologinsignup-login">Already have an account? <span onClick={() => setState("Login")}>Login here</span></p> :
          <p className="lologinsignup-login">Create an account? <span onClick={() => setState("Sign Up")}>Click here</span></p>
        }
      </div>
    </div>
  );
};

export default LoginSignup;