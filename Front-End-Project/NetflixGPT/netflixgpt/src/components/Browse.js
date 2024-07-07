import Header from './Header'
import "../AllCSS/Browse.css"
import MainContainer from './MainContainer'
import useNowPlayingMoview from '../CustomHooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../CustomHooks/usePopularMovies'
import useUpcommingMovies from '../CustomHooks/useUpcommingMovies'
import useTopRatedMovies from '../CustomHooks/useTopRatedMovies'
import GPTSearch from './GPTSearch'
import {useSelector} from "react-redux"
const Browse = () => {
const showGptSearchView = useSelector(store => store.gpt.showGptSearch)
useNowPlayingMoview()
usePopularMovies()
useUpcommingMovies()
useTopRatedMovies()


  return (
    
      <div className="BrowseHeader">
      <Header/>
      {showGptSearchView ? <GPTSearch/> : <><MainContainer/> <SecondaryContainer/></>}
      </div>
  )
}

export default Browse