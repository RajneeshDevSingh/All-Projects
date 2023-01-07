import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='container'>
        <div className='list'>

        <label>Email</label>
        <input type="email" ></input>
        <label>Passward</label>
        <input type="password"></input>
        <button>Submit</button>
        </div>
    </div>
  )
}

export default Navbar