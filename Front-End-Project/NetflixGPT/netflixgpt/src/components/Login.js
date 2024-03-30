import React, { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import Header from "./Header";
import "../AllCSS/Login.css";

const Login = () => {
  const [isSignIn, setISsignIn] = useState(true);
  const [isRotated, setIsRotated] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const Email = useRef(null);
  const Password = useRef(null);
  const ConfirmPassword = useRef(null)
  const HandleToggle = () => {
    setISsignIn(!isSignIn);
    setIsRotated(!isRotated);
  };
  const handleButtonClick = () => {
    const message = checkValideData(Email, Password, ConfirmPassword);
    setErrorMessage(message);
    if (message) return; // means there is some error in varification, return and in case of all fine null means nothing
    // console.log(message);

    if (isSignIn) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // console.log(errorCode+"--->"+errorMessage)
          // ..
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage)
        });
    }
  };

  if(isSignIn)
  {

  }
  const checkValideData = (Email, Password, ConfirmPassword) => {
    const isEmailValid =
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
        Email.current.value
      );
    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
        Password.current.value
      );

    if (!isEmailValid) return "Incorrect Email Id 😒";
    if (!isPasswordValid) return "Incorrect Password 😒";
    
    if(isSignIn)
    {
      if(Password.current.value !== ConfirmPassword.current.value) return "Password didn't match 😒"

    }

    return null;
  };

  return (
    <div className="LoginPage">
      <div>
        <Header />
      </div>
      <form
        className={`LoginCont ${isRotated ? "rotate" : ""}`}
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="SignIn">{isSignIn ? "Sign Up" : "Sign In"}</h2>
        {isSignIn && <input className="input" type="text" placeholder="Name" required/>}
        <input
          className="input"
          placeholder="Email address"
          required
          ref={Email}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          required
          ref={Password}
        />
        {isSignIn && (
          <input
            className="input"
            type="password"
            placeholder="Confirm password"
            ref={ConfirmPassword}
          />
        )}

        <button className="Signin" type="submit" onClick={handleButtonClick}>
          {isSignIn ? "Sign Up" : "Sign In"}
        </button>
        <p className="ErrorMessage">{errorMessage}</p>
        <p className="newNet">
          {isSignIn ? "Already user! " : "Are you new to Netflix? "}
          <span className="sinup" onClick={HandleToggle}>
            {isSignIn ? "Sign In " : "Sign Up "}
          </span>
          Now
        </p>
      </form>
    </div>
  );
};

export default Login;
