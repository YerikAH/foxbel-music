import { useContext } from 'react'
import * as style from '../../../styles/main'
import Banner from './Banner'
import WidgetDeezer from './WidgetDeezer'
import NavigationMain from './NavigationMain'
import SectionCard from './SectionCard'
import MusicContext from '../../../context/musicContext'

const Recent = () => {
  const musicContext = useContext(MusicContext)
  return (
    <MusicContext.Provider value={musicContext}>
        <NavigationMain />
        {musicContext.data !== null ? <Banner /> : <WidgetDeezer />}
        <style.HeadlinePrincipal>Recientes</style.HeadlinePrincipal>
        <SectionCard />
    </MusicContext.Provider>
  )
}

export default Recent
