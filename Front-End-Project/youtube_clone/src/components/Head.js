import { HiBars4 } from "react-icons/hi2";
import { HiMiniUserCircle } from "react-icons/hi2";
import Logo from "../img/logo1.jpg";

import { useState } from "react";
import "../Allcss/Head.css"
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";






const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler =()=>
  {
    dispatch(toggleMenu())
  }
  const [searchText, SetSearchText] = useState();
  return (
    <div className="HeadCont">
      <div className="Side1">
        <HiBars4 className="Menu" onClick={()=> toggleMenuHandler()}/>
   
        <img  className="YoutubeLogo" src={Logo} alt="someImg" />
      </div>
      <div className="InputArer">
        <input className="inputBox"
          type="text"
          onChange={(e) => e.target.value}
          value={searchText}
        />
        <button className="SearchCont">🔍</button>
      </div>
      <div className="userCont">
        <HiMiniUserCircle  className="UserIcon"/>
      </div>
    </div>
  );
};

export default Head;