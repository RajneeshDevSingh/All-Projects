import React, { useState } from 'react'
import { LOGO } from '../utils/Constant'
import "../AllCSS/Browse.css"
import { signOut } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom'
const Browse = () => {
  const [login, setLogin] = useState(true)
  const navigate = useNavigate()
  
  const HandleLogout = ()=>
  {
    
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
  setLogin(false)
}).catch((error) => {
  // An error happened.
  navigate("/error")
});
  }
  return (
    <div>
      <div className="BrowseHeader">
      <img className="logog" src={LOGO} alt='Logo'/>
    <button className='logoutBtn' onClick={HandleLogout}>{login?"Log out":"Log in"}</button>
      </div>
      Browse</div>
  )
}

export default Browse