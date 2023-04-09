import { useContext } from 'react'
import MusicContext from '../../../context/musicContext'
import NavigationMain from './NavigationMain'
import WidgetDeezer from './WidgetDeezer'
import Banner from './Banner'
import { useLocation } from 'react-router-dom'
import { PathRoutes } from '../../../enum/enum'
import Recent from './Recent'
import Artist from './Artist'
import Album from './Album'
import Podcast from './Podcast'

const Page = () => {
  const musicContext = useContext(MusicContext)
  const location = useLocation()
  return (
    <>
      <MusicContext.Provider value={musicContext}>
        <NavigationMain />
        {musicContext.data !== null ? <Banner /> : <WidgetDeezer />}
        {location.pathname === PathRoutes.recent && <Recent />}
        {location.pathname === PathRoutes.artist && <Artist />}
        {location.pathname === PathRoutes.albums && <Album />}
        {location.pathname === PathRoutes.podcast && <Podcast />}
      </MusicContext.Provider>
    </>
  )
}

export default Page
