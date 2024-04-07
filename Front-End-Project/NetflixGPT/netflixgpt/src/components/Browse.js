import Header from './Header'
import "../AllCSS/Browse.css"
import useNowPlayingMoview from '../CustomHooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
const Browse = () => {

useNowPlayingMoview()
  return (
    
      <div className="BrowseHeader">
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      </div>
  )
}

export default Browse