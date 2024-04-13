import React from 'react'
import {IMG_CDN} from "../utils/Constant"
import "../AllCSS/Secondary.css"
const MovieCard = ({posterPath}) => {
  return (
    <div className='MovieCard'>
      <img className="MoviePoster" alt="Movie IMG" src={IMG_CDN + posterPath}/>
      {/* <h1>Hello</h1> */}
      
    </div>
  )
}

export default MovieCard