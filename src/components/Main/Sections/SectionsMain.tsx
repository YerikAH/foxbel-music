import { useContext, useEffect } from 'react'
import * as style from '../../../styles/main'
import Banner from './Banner'
import NavigationMain from './NavigationMain'
import SectionCard from './SectionCard'
import MusicContext from '../../../context/musicContext'
import WidgetDeezer from './WidgetDeezer'
import FetchContext from '../../../context/fetchContext'
const SectionsMain = () => {
  const musicContext = useContext(MusicContext)
  const fetchContext = useContext(FetchContext)
  const handleScroll = (e:React.UIEvent<HTMLElement, UIEvent>) => {
    console.log('El usuario está moviendo el scroll');
    const elementScroll = e.target as HTMLDivElement
    const moveScroll = elementScroll.scrollTop
    const maxScroll = elementScroll.scrollHeight - elementScroll.clientHeight
    console.log(maxScroll, moveScroll)
    if(moveScroll > maxScroll - 100){
      console.log('Nueva peticion')
      fetchContext.handleContext()
      console.log(fetchContext.root)
    }
  };
  useEffect(() => {
    const data = fetchContext.root
    if(data !== null) {
      musicContext.handleAddAllData(data) 
    }
  }, [fetchContext.root])
  
  
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
