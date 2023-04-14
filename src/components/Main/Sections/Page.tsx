import { useContext } from 'react'
import MusicContext from '../../../context/musicContext'
import NavigationMain from './Navigation/NavigationMain'
import WidgetDeezer from './Banner/WidgetDeezer'
import Banner from './Banner/Banner'
import { useLocation } from 'react-router-dom'
import { PathRoutes } from '../../../enum/enum'
import Recent from './Conditional/Recent'
import Artist from './Conditional/Artist'
import Album from './Conditional/Album'
import Podcast from './Conditional/Podcast'
import BannerOption from './Banner/BannerOptions'

const Page = () => {
  const musicContext = useContext(MusicContext)
  const location = useLocation()
  return (
    <>
      <MusicContext.Provider value={musicContext}>
        <NavigationMain />
        {musicContext.bannerSpecial ? (
          <BannerOption />
        ) : musicContext.data !== null ? (
          <Banner />
        ) : (
          <WidgetDeezer />
        )}
        {location.pathname === PathRoutes.recent && <Recent />}
        {location.pathname === PathRoutes.artist && <Artist />}
        {location.pathname === PathRoutes.albums && <Album />}
        {location.pathname === PathRoutes.podcast && <Podcast />}
      </MusicContext.Provider>
    </>
  )
}

export default Page
