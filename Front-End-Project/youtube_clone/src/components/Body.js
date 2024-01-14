import React from 'react'
import MainContiner from './MainContiner'
import ButtonList from './ButtonList'
import SideBar from './SideBar'

import "../Allcss/Body.css"
const Body = () => {
  return (
    <div className='Body_cont'>
        <SideBar/>
        <ButtonList/>
        <MainContiner/>

    </div>
  )
}

export default Body