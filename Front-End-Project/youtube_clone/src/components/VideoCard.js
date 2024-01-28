import React from "react";
import "../Allcss/VideoCard.css"
const VideoCard = ({ videosInfo }) => {
//   console.log(videosInfo);
  const { snippet, statistics } = videosInfo;
  const { title, channelTitle, thumbnails,} = snippet;
  const {viewCount} = statistics

  return (
    <div className="videosCont">
      <div className="OneVideoCont">
          <img className="IMG" src={thumbnails.medium.url} alt="SomeIMG" />
          <ul className="videoSubUL">
            <li className="NoFlexTitle">{title}</li>
            <li className="liFont">{channelTitle}</li>

            <li className="liFont">{Math.floor(statistics.viewCount/1000)+"K Views"}</li>
          </ul>
      </div>



    
    </div>
  );
};

export default VideoCard;
