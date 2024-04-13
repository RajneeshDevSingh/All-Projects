import React from "react";
import MovieCard from "./MovieCard";
import "../AllCSS/Secondary.css"
const MovieList = ({ title, movies }) => {
    // console.log(movies[0].poster_path)
  return (
    <div className="MovieCont">
        

        
      <div className="MovieList">
        <h1 className="MovieTitle">{title}</h1>
        <div className="Movies">
        {movies != null ? movies.map((movie) => <MovieCard posterPath={movie.poster_path} key={movie.id} />) : <MovieCard />}
        </div>
      </div>

      </div>
    
  );
};

export default MovieList;
