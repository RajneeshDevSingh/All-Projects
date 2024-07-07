import React, { useEffect } from 'react'
import {API_Options, IMG_CDN} from "../utils/Constant"
import "../AllCSS/Secondary.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



const MovieCard = ({posterPath,OneMovie}) => {
  // console.log(OneMovie.title)


  
  return (
    <div className='MovieCard'>
      <Link to="/browse/movie-overview">
      <img className="MoviePoster" alt="Movie IMG" src={IMG_CDN + posterPath} overView={OneMovie}/>
      </Link>
      
      </div>
  )
}

export default MovieCard