import { useContext, useEffect, useState } from 'react'
import * as style from '../../../styles/banner'
import MusicContext from '../../context/musicContext'
import BannerAutor from './BannerAutor'
import BannerInfo from './BannerInfo'
import FetchContext from '../../context/fetchContext'
import { Daum } from '../../../interface/chart'

const Banner = () => {
  const [musicSelect, setMusicSelect] = useState<Daum >()
  const musicContext = useContext(MusicContext)
  const fetchContext = useContext(FetchContext)
  useEffect(() => {
    console.log(musicContext.id)
    const music = fetchContext.root?.tracks.data.find((item) => item.id === musicContext.id)
    setMusicSelect(music)
  }, [musicContext.id])
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
