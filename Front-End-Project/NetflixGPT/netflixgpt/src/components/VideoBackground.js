
import { useSelector } from "react-redux";
import useMovieTrailer from "../CustomHooks/useMovieTrailer";
import "../AllCSS/Login.css"
const VideoBackground = ({ movieID }) => {

  const trailerVideoID = useSelector(store => store.movies?.trailerVideo ) 
  // console.log(trailerVideoID);
  
useMovieTrailer(movieID)

  return (
    <div className="BackGroundVideo">
      <iframe
      className="BackgroundTrailer"
        src={"https://www.youtube.com/embed/"+trailerVideoID?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
