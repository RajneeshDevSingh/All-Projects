import React from 'react'
import MovieList from './MovieList'
import {useSelector} from "react-redux"
import "../AllCSS/Secondary.css"
const SecondaryContainer = () => {
  const movies = useSelector((store) => (store.movies))
  const Popularmovies = useSelector((store) => (store.movies))
  const UpCommingMoviesmovies = useSelector((store) => (store.movies))
  const TopRatedMovies = useSelector((store) => (store.movies))
  return (
    <div className="SecondPart">
      {movies && <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies}/>}
      {TopRatedMovies && <MovieList title={"Top Rated"} movies ={movies.topRatedMovies}/>}
      {UpCommingMoviesmovies && <MovieList title={"Upcomming Movies"} movies ={movies.upCommingMovies}/>}
      {Popularmovies && <MovieList title={"Popular Movies"} movies ={movies.popularMovies}/>}
    </div>
  )
}

export default SecondaryContainer