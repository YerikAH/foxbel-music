import { useContext, useEffect } from 'react'
import * as style from '../../../styles/main'
import Banner from './Banner'
import NavigationMain from './NavigationMain'
import SectionCard from './SectionCard'
import MusicContext from '../../../context/musicContext'
import WidgetDeezer from './WidgetDeezer'
const SectionsMain = () => {
  const musicContext = useContext(MusicContext)
  const handleScroll = (e:React.UIEvent<HTMLElement, UIEvent>) => {
    console.log('El usuario está moviendo el scroll');
    const elementScroll = e.target as HTMLDivElement
    console.log(elementScroll.scrollTop)
    console.log('el alto', elementScroll.scrollHeight - elementScroll.clientHeight)
    // Aquí puedes hacer lo que necesites cuando se detecte que el usuario está moviendo el scroll
  };
  
  return (
    <MusicContext.Provider value={musicContext}>
      <style.SectionBox onScroll={(e)=>handleScroll(e)} >
        <NavigationMain />
        {musicContext.data !== null ? <Banner /> : <WidgetDeezer />}
        <style.HeadlinePrincipal>Recientes</style.HeadlinePrincipal>
        <SectionCard />
      </style.SectionBox>
    </MusicContext.Provider>
  )
}

export default SectionsMain
