import React, {useState}from 'react'
import { LOGO} from '../utils/Constant'
import "../AllCSS/Header.css"
import { signOut } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

import { useDispatch} from "react-redux";
const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isNotBrowsePage = location.pathname !== '/browse';
  const navigate = useNavigate()
  
  useEffect(() => {
  
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}))
        navigate("/browse")
  } 
      else 
      {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
       
      }

      return ()=> unSubscribe();
    });
  }, []);

  const HandleLogout = ()=>
  {
    signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  navigate("/error")
});
  }

  return (
      <div className='Upper'>
      <img className="logo" src={LOGO} alt='Logo'/>
      {!isNotBrowsePage && <button className='logoutBtn' onClick={HandleLogout}>Log out</button>}
      </div>
  )
}

export default Header