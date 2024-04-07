import React from 'react'
import "../AllCSS/video.css"
const VideoTitle = ({title , overview}) => {
  return (
    <div className='FirstPart'>
        <p className='Title'>{title}</p>
        <p className='OverView'>{overview}</p>
        <div className='infoBn'>
            <button className='Btn'>Play</button>
            <button className='Btn'>Moreinfo</button>
        </div>
    </div>
  )
}

export default VideoTitle