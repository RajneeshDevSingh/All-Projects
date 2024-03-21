import React from 'react'
import { LOGO,BG_URL } from '../utils/Constant'
import "../AllCSS/Header.css"
const Header = () => {
  return (
    <div className="Header">
      <img className="logo" src={LOGO} alt='Logo'/>
      <img className="backimg" src={BG_URL} alt='BG img'/>
    </div>
  )
}

export default Header