import { API_Options } from "../utils/Constant";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from "../utils/moviesSlice";


const useTopRatedMovies = ()=>
{
const dispatch = useDispatch()
const getTopRatedMovies = async ()=>
{
  const data = await fetch('Https://api.themoviedb.org/3/movie/top_rated?page=1', API_Options)
  const jsonData = await data.json()
  dispatch(addTopRatedMovies(jsonData.results))
  
}

useEffect(()=>
{
  getTopRatedMovies();
},[])

}

export default useTopRatedMovies;
