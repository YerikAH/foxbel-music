import { useContext, useEffect, useState } from 'react'
import * as style from '../../../styles/banner'
import MusicContext from '../../../context/musicContext'
import BannerAutor from './BannerAutor'
import BannerInfo from './BannerInfo'
import FetchContext from '../../../context/fetchContext'
import { Daum } from '../../../interface/chart'
import { useSearchWiki } from '../../../hook/useSearchWiki'
import { Search } from '../../../interface/searchWiki'

const Banner = () => {
  const [musicSelect, setMusicSelect] = useState<Daum|null >(null)
  const [query, setQuery] = useState('')
  const [extra, setExtra] = useState('')
  const musicContext = useContext(MusicContext)
  const fetchContext = useContext(FetchContext)
  const { dataReturn, loading } = useSearchWiki(query)

  useEffect(() => {
    setQuery(musicContext.data?.artist?.name?.replace(/\s+/g, '%20') ?? '')
    setMusicSelect(musicContext.data)
    if(dataReturn.query.search.length > 1){
      const search = dataReturn.query.search as Search[] 
      setExtra(search[0].snippet)
    }

  }, [musicContext.data, loading, dataReturn])
  return (
    <FetchContext.Provider value={fetchContext}>
      <MusicContext.Provider value={musicContext}>
        <style.SectionBanner>
          <BannerAutor  data={musicSelect}/>
          <BannerInfo  data={musicSelect} extra={extra}/>
        </style.SectionBanner>
      </MusicContext.Provider>
    </FetchContext.Provider>
  )
}

export default Banner
