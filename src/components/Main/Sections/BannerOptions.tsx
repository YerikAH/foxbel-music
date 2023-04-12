import { useContext, useEffect, useState } from 'react'
import BannerOptionContext from '../../../context/bannerOptionContext'
import * as style from '../../../styles/banner'
import * as style2 from '../../../styles/banner_option'
import { ArtistList } from '../../../interface/artistMusic'
import { ALBUM_LIST, ARTIST_LIST } from '../../../constant/constant'
import MusicContext from '../../../context/musicContext'
import PlaceImage from '../../../assets/foxbel-music.png'
import { ErrorRoot } from '../../../interface/error'
import { AlbumMusic } from '../../../interface/albumMusic'
import { useLocation } from 'react-router-dom'
import { PathRoutes } from '../../../enum/enum'

const BannerOption = () => {
  const bannerOptionContext = useContext(BannerOptionContext)
  const [data, setData] = useState<ArtistList>(ARTIST_LIST)
  const [dataTwo, setDataTwo] = useState<AlbumMusic>(ALBUM_LIST)

  const location = useLocation()
  const musicContext = useContext(MusicContext)
  useEffect(() => {
    const dataError = bannerOptionContext.data as ErrorRoot
    if (dataError.error) {
      return
      // here code for the error
    } else {
      const dataNotError = bannerOptionContext.data as ArtistList
      if (dataNotError.next !== undefined) {
        setData(dataNotError)
      } else {
        const newData = bannerOptionContext.data as AlbumMusic
        setDataTwo(newData)
      }
    }
  }, [bannerOptionContext.data])

  return (
    <MusicContext.Provider value={musicContext}>
      <BannerOptionContext.Provider value={bannerOptionContext}>
        <style.SectionBanner>
          <style2.BannerOptionPrincipal>
            <style2.BannerImagePrincipal
              src={`${bannerOptionContext.autor}?timestamp=${Date.now()}` ?? PlaceImage}
              alt='img'
            />
          </style2.BannerOptionPrincipal>
          <style2.BannerOptions>
            {location.pathname === PathRoutes.artist  &&
              data.data.map((item, idx) => (
                <style2.BannerAllOptinos
                  key={idx}
                  onClick={() => musicContext.handleMusicNew(item)}
                >
                  <style2.BannerOptionsImage src={item.album.cover_xl} alt='music' />
                  <style2.BannerOptionInfo>
                    <style2.BannerMusic>{item.title}</style2.BannerMusic>
                    <style2.BannerAutor>{item.album.title}</style2.BannerAutor>
                  </style2.BannerOptionInfo>
                </style2.BannerAllOptinos>
              ))}
            {location.pathname === PathRoutes.albums &&
              dataTwo.data.map((item, idx) => (
                <style2.BannerAllOptinos
                  key={idx}
                  onClick={() => musicContext.handleMusicNew(item)}
                >
                  <style2.BannerOptionsImage src={bannerOptionContext.autor} alt='music' />
                  <style2.BannerOptionInfo>
                    <style2.BannerMusic>{item.title}</style2.BannerMusic>
                    <style2.BannerAutor>{item.artist.name}</style2.BannerAutor>
                  </style2.BannerOptionInfo>
                </style2.BannerAllOptinos>
              ))}
          </style2.BannerOptions>
        </style.SectionBanner>
      </BannerOptionContext.Provider>
    </MusicContext.Provider>
  )
}

export default BannerOption
