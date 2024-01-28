import React, { useEffect } from 'react'
import Youtube_API_URL from '../Utils/Constants'

const VideoContainer = () => {
useEffect(()=>{
  GetVideo();
},[])

const GetVideo = async ()=>
{
  const data = await fetch(Youtube_API_URL);

  const Json = await data.json();

  console.log(Json)
}
  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer