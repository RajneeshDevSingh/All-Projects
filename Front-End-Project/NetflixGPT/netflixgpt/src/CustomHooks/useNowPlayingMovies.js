import { API_Options } from "../utils/Constant";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from "../utils/moviesSlice";


const useNowPlayingMoview = ()=>
{
const dispatch = useDispatch()
const getNowPlayingMOvies = async ()=>
{
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options)
  const jsonData = await data.json()
  dispatch(addNowPlayingMovies(jsonData.results))
  
}

useEffect(()=>
{
  getNowPlayingMOvies();
},[])

}

export default useNowPlayingMoview;
