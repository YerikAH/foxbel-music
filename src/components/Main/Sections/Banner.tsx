import { useContext, useEffect, useState } from 'react'
import * as style from '../../../styles/banner'
import MusicContext from '../../../context/musicContext'
import BannerAutor from './BannerAutor'
import BannerInfo from './BannerInfo'
import FetchContext from '../../../context/fetchContext'
import { Daum } from '../../../interface/chart'
import { useSearchWiki } from '../../../hook/useSearchWiki'

const Banner = () => {
  const [musicSelect, setMusicSelect] = useState<Daum|null >(null)
  const musicContext = useContext(MusicContext)
  const fetchContext = useContext(FetchContext)
  const [query, setQuery] = useState('')
  const { dataReturn, loading } = useSearchWiki(query)

  useEffect(() => {
    setQuery(musicContext.data?.artist.name.replace(/\s+/g, '%20') ?? '')
    setMusicSelect(musicContext.data)
    console.log(dataReturn)
  }, [musicContext.data, loading])
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
