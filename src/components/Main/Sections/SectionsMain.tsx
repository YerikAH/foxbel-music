import { useContext } from 'react'
import * as style from '../../../styles/main'
import Banner from './Banner'
import NavigationMain from './NavigationMain'
import SectionCard from './SectionCard'
import MusicContext from '../../context/musicContext'
const SectionsMain = () => {
  const musicContext = useContext(MusicContext)
  console.log(musicContext.id)
  return (
    <MusicContext.Provider value={musicContext}>
      <style.SectionBox>
        <NavigationMain />
        {musicContext.id !== 0 ? (
          <Banner />
        ) : (
          <style.IframeDezzer>
            <iframe
              title='deezer-widget'
              src='https://widget.deezer.com/widget/light/playlist/1479458365'
              width='100%'
              height='300'
              frameBorder='0'
              // eslint-disable-next-line react/no-unknown-property
              allowTransparency={true}
              allow='encrypted-media; clipboard-write'
            ></iframe>
          </style.IframeDezzer>
        )}
        <style.HeadlinePrincipal>Resultados</style.HeadlinePrincipal>
        <SectionCard />
      </style.SectionBox>
    </MusicContext.Provider>
  )
}

export default SectionsMain
