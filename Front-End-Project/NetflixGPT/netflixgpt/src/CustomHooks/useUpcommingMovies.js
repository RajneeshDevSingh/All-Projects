import { API_Options } from "../utils/Constant";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpCommingMovies } from "../utils/moviesSlice";


const useUpcommingMovies = ()=>
{
const dispatch = useDispatch()
const getUpcommingMovies = async ()=>
{
  const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_Options)
  const jsonData = await data.json()
  dispatch(addUpCommingMovies(jsonData.results))
  
}

useEffect(()=>
{
  getUpcommingMovies();
},[])

}

export default useUpcommingMovies;
