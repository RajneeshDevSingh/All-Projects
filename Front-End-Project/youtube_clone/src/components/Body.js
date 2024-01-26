import React from 'react'
import MainContiner from './MainContiner'
import ButtonList from './ButtonList'
import SideBar from './SideBar'

import "../Allcss/Body.css"
const Body = () => {
  return (
    <div className='Body_cont'>
        <SideBar/>
        <div>
        <ButtonList/>
        <MainContiner/>
        </div>
       

    </div>
  )
}

export default Body