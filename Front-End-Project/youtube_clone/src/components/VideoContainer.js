import React, { useEffect, useState } from "react";
import Youtube_API_URL from "../Utils/Constants";
import VideoCard from "./VideoCard";

import "../Allcss/VideoCard.css"
const VideoContainer = () => {
  const [videos, SetVideos] = useState([]);
  useEffect(() => {
    GetVideo();
  }, []);

  const GetVideo = async () => {
    const data = await fetch(Youtube_API_URL);

    const json = await data.json();

    console.log(json.items);
    SetVideos(json.items);
  };
  return (
    <div className="allVideos">
      {videos.map((video) => <VideoCard key={video.id} videosInfo={video} />)}
      
    </div>
  );
};

export default VideoContainer;
