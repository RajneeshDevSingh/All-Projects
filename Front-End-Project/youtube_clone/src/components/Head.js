import { HiBars4 } from "react-icons/hi2";
import { HiMiniUserCircle } from "react-icons/hi2";
import Logo from "../img/logo1.jpg";

import { useState } from "react";
import "../Allcss/Head.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
// import { Youtube_Search_Suggestion_API } from "../Utils/Constants";

import { useEffect } from "react";
import fetchJsonp from "fetch-jsonp";
import { cacheResults } from "../Utils/searchSlice";

const Head = () => {
  const [searchQuery, SetSearchQuery] = useState("");
  const [suggestions , SetSuggestions] = useState([]);
  const[showsuggestions, SetShowsuggestions] = useState(false)
  const searchCache = useSelector((store)=> store.search)
  const dispatch = useDispatch();

  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };


  // make an api call after every key press, but if the difference beween 2 api calls is <200ms decline the api call , if not make the api call

  // *key - i
  // render the component
  // useEffect();
  // start timer make api call after 200 ms

  // * key - ip
  // destroy the component (useEffect return method)
  // re-render the component
  // useEffec()
  // start timer make api call after 200 ms

  useEffect(() => {
    const timer = setTimeout(() =>{
      
      if(searchCache[searchQuery])
      {
        SetSuggestions(searchCache[searchQuery])
      }
      else
      {
        getSearchSuggestion()
      }
    
  }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    console.log("API call", searchQuery)
    try {
      const response = await fetchJsonp(
        `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`
      );
      const data = await response.json();
      SetSuggestions(data[1])
      // console.log(data[1]);
      // updated the searchCache
      dispatch(cacheResults({[searchQuery] : data[1]}));
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
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
          onFocus={()=> SetShowsuggestions(true)}
          onBlur={()=> SetShowsuggestions(false)}
        />
        <button className="SearchCont">🔍</button>
    
        {showsuggestions && <ul className="inputSuggestions">
          {
            suggestions.map((suggestion) => (
             <li key={suggestion}>🔍 {suggestion}</li>
            ))
          }

        </ul>}
      </div>


      <div className="userCont">
        <HiMiniUserCircle className="UserIcon" />
      </div>
    </div>
  );
};

export default Head;
