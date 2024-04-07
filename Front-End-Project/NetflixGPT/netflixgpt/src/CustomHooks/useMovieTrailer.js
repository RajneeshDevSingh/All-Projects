import React from 'react'
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_Options } from "../utils/Constant";
import { useEffect } from "react";

import { useDispatch} from "react-redux";
const useMovieTrailer = (movieID) => {
    const dispatch = useDispatch()

    const getMovieVideos = async () => {
        const videos = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US",
          API_Options
        );
        const videodata = await videos.json();
        const Filtertrailer = videodata.results.filter((video) => video.type === "Trailer");
        const Trailer = Filtertrailer.length?Filtertrailer[0]:videodata.results[0];
          
          dispatch(addTrailerVideo(Trailer))
          
      };
      useEffect(() => {
        getMovieVideos();
      }, []);


}

export default useMovieTrailer