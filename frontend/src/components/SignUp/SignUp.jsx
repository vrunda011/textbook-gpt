import React, { useState } from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'

const LoginSignup = () => {

  const [state,setState] = useState("Login")
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email:""
  })

  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

//   const login = async () => {
//     console.log("login",formData)
//     let responseData;
//     await fetch('https://backend-main-yi7u.onrender.com/login',{
//       method: 'POST',
//       headers: {
//         Accept: 'application/form-data',
//         'content-type': 'application/json'
//       },
//       body:JSON.stringify(formData),
//     }).then((response) => response.json()).then((data) => responseData = data)

//     if(responseData.success){
//       localStorage.setItem('auth-token',responseData.token);
//       window.location.replace("/")
//     }else{
//       alert(responseData.errors)
//     }
//   }

//   const signup = async () => {
//     console.log("Sign up",formData)
//     let responseData;
//     await fetch('',{
//       method: 'POST',
//       headers: {
//         Accept: 'application/form-data',
//         'content-type': 'application/json'
//       },
//       body:JSON.stringify(formData),
//     }).then((response) => response.json()).then((data) => responseData = data)

//     if(responseData.success){
//       localStorage.setItem('auth-token',responseData.token);
//       window.location.replace("/")
//     }else{
//       alert(responseData.errors)
//     }

//   }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input name='username' value={formData.usename} onChange={changeHandler} type="text" placeholder="Your Name" id="name" />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" id="email" />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" id="password" />
        </div>
        {state==="Sign Up"
        ?<div className="loginsignup-agree">
            <input type="checkbox" />
            <p>By continuing, i agree the terms of use & privacy policy.</p>
          </div>
        :<></>}
        <Link to="/standard">
        <button >Continue</button>
        </Link>
        {state==="Sign Up"
        ?<p className="lologinsignup-login">Alredy have account <span onClick={() => {setState("Login")}}>Login here</span></p>
        :<p className="lologinsignup-login">Create An account? <span onClick={() => {setState("Sign Up")}}>Click here</span></p>}
      </div>
    </div>
  )
}

export default LoginSignup