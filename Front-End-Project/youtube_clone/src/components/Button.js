import React from 'react'

import "../Allcss/ButtonList.css"
const Button = ({name}) => { //destructure in a fly (props)  <button className='BTN'>{props.name}</button> 
  return (
    <div className='ListBTN'>
     <button className='BTN'>{name}</button> 
     
    </div>
  )
}

export default Button