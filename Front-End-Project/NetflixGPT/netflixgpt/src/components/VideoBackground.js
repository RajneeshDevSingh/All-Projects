
import { useSelector } from "react-redux";
import useMovieTrailer from "../CustomHooks/useMovieTrailer";
import "../AllCSS/Login.css"
const VideoBackground = ({ movieID }) => {

  const trailerVideoID = useSelector(store => store.movies?.trailerVideo ) 
  
useMovieTrailer(movieID)

  return (
    <div className="BackGroundVideo">
    <iframe 
    className="BackgroundTrailer"
    src={"https://www.youtube.com/embed/" + trailerVideoID?.key + "?&autoplay=1&mute=1&rel=0&showinfo=0&controls=0&loop=1"}
    title="YouTube video player"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
    </div>
  );
};

export default VideoBackground;
