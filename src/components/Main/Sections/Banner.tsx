import { useContext, useEffect, useState } from 'react'
import * as style from '../../../styles/banner'
import MusicContext from '../../../context/musicContext'
import BannerAutor from './BannerAutor'
import BannerInfo from './BannerInfo'
import FetchContext from '../../../context/fetchContext'
import { Daum } from '../../../interface/chart'

const Banner = () => {
  const [musicSelect, setMusicSelect] = useState<Daum|null >(null)
  const musicContext = useContext(MusicContext)
  const fetchContext = useContext(FetchContext)
  useEffect(() => {
    setMusicSelect(musicContext.data)
  }, [musicContext.data])
  return (
    <FetchContext.Provider value={fetchContext}>
      <MusicContext.Provider value={musicContext}>
        <style.SectionBanner>
          <BannerAutor  data={musicSelect}/>
          <BannerInfo  data={musicSelect}/>
        </style.SectionBanner>
      </MusicContext.Provider>
    </FetchContext.Provider>
  )
}

export default Banner
