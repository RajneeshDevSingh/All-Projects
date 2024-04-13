import Header from './Header'
import "../AllCSS/Browse.css"
import MainContainer from './MainContainer'
import useNowPlayingMoview from '../CustomHooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../CustomHooks/usePopularMovies'
import useUpcommingMovies from '../CustomHooks/useUpcommingMovies'
import useTopRatedMovies from '../CustomHooks/useTopRatedMovies'
const Browse = () => {

useNowPlayingMoview()
usePopularMovies()
useUpcommingMovies()
useTopRatedMovies()
  return (
    
      <div className="BrowseHeader">
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      </div>
  )
}

export default Browse