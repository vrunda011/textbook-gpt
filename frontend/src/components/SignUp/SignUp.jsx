import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>
        {state === "Sign Up" && 
          <div className="loginsignup-agree">
            <input type="checkbox" />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        }
        <Link to="/standard">
          <button>Continue</button>
        </Link>
        {state === "Sign Up" ?
          <p className="lologinsignup-login">Already have an account? <span onClick={() => setState("Login")}>Login here</span></p> :
          <p className="lologinsignup-login">Create an account? <span onClick={() => setState("Sign Up")}>Click here</span></p>
        }
      </div>
    </div>
  );
};

export default LoginSignup;
