import React, { useState } from "react";
import Header from "./Header";
import "../AllCSS/Login.css"
const Login = () => {
  const [isSignIn, setISsignIn] = useState(true)
  const [isRotated, setIsRotated] = useState(false);

  const HandleToggle =()=>
  {
    setISsignIn(!isSignIn)
    setIsRotated(!isRotated);
  }
  return (
    <div className="LoginPage">
      <div>
        <Header />
      </div>
      <form className={`LoginCont ${isRotated ? 'rotate' : ''}`}>
        <h2 className="SignIn">{isSignIn? "Sign In":"Sign Up"}</h2>
        {isSignIn && <input className="input" type="text" placeholder="Name" />}
        <input className="input" type="email" placeholder="Email address" />
        <input className="input" type="password" placeholder="Password" />
        {isSignIn && <input className="input" type="password" placeholder="Confirm password" />}
        <button className="Signin" type="submit" >{isSignIn? "Sign In":"Sign Up"}</button>
        <p className="newNet">{isSignIn? "Are you new to Netflix? ":"Already user! "} <span className="sinup" onClick={HandleToggle}>{isSignIn? "Sign Up ":"Sign In "}</span>Now</p>

      </form>
    </div>
  );
};

export default Login;
