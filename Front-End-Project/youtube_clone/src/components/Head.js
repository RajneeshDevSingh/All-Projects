import { HiBars4 } from "react-icons/hi2";
import { HiMiniUserCircle } from "react-icons/hi2";
import Logo from "../img/logo1.jpg";

import { useState } from "react";
import "../Allcss/Head.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
// import { Youtube_Search_Suggestion_API } from "../Utils/Constants";

import { useEffect } from "react";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const [searchQuery, SetSearchQuery] = useState("");
  // console.log(searchQuery)

  useEffect(()=>{
    // make an api call after every key press, but if the difference beween 2 api calls is <200ms decline the api call , if not make the api call
    getSearchSuggestion();
  },[searchQuery]);

 
  const getSearchSuggestion = async () => {
    let data = await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`)
    const jsonData = await data.json();
    console.log(jsonData[1]);
  };

  return (
    <div className="HeadCont">
      <div className="Side1">
        <HiBars4 className="Menu" onClick={() => toggleMenuHandler()} />

        <img className="YoutubeLogo" src={Logo} alt="someImg" />
      </div>
      <div className="InputArer">
        <input
          className="inputBox"
          type="text"
          onChange={(e) => SetSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button className="SearchCont">🔍</button>
      </div>
      <div className="userCont">
        <HiMiniUserCircle className="UserIcon" />
      </div>
    </div>
  );
};

export default Head;
