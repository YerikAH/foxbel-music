import { createContext, useEffect, useState } from 'react'
import serviceApi from '../service/service'
import { ContextProps } from '../interface/props'
import { BannerContext } from '../interface/context'
import { BANNER_CONTEXT, ERROR_DATA_ARTIST } from '../constant/context'
import { ArtistList } from '../interface/artistMusic'
import { ErrorRoot } from '../interface/error'
import { AlbumMusic } from '../interface/albumMusic'
import { OptionBanner, PathRoutes } from '../enum/enum'
import { useLocation } from 'react-router-dom'
import { ALBUM_LIST, ARTIST_LIST } from '../constant/constant'

const BannerOptionContext = createContext<BannerContext>(BANNER_CONTEXT)

const BannerOptionProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState<ArtistList | ErrorRoot | AlbumMusic >(ERROR_DATA_ARTIST)
  const [dataReturn, setDataReturn] = useState<BannerContext>(BANNER_CONTEXT)
  const [autor, setAutor] = useState('')
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const [option, setOption] = useState<OptionBanner>(OptionBanner.artist)
  const [renderArtist, setRenderArtist] = useState(ARTIST_LIST)
  const [renderAlbum, setRenderAlbum] = useState(ALBUM_LIST)
  const handleNewData = (id: number) => {
    if(option === OptionBanner.artist){
      musicArtist(id)
    }else{
      musicAlbum(id)
    }
  }
  function musicArtist(id: number){
    setLoading(true)
    return  serviceApi
      .artist(id)
      .then((res) => {
        setData(res)
      })
      .catch((err) => {
        setData(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  function musicAlbum(id: number){
    setLoading(true)
    return  serviceApi
      .album(id)
      .then((res) => {
        setData(res)
      })
      .catch((err) => {
        setData(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  useEffect(() => {
    if(location.pathname ===PathRoutes.artist ){
      setOption(OptionBanner.artist)
    }else{
      setOption(OptionBanner.album)

    }
  }, [location.pathname])
  
  useEffect(() => {
    const dataUpdate: BannerContext = {
      handleNewData,
      loading,
      data,
      autor,
      setAutor,
      setRenderArtist,
      setRenderAlbum,
      renderAlbum,
      renderArtist
    }
    setDataReturn(dataUpdate)
  }, [data, loading, renderAlbum, renderArtist, autor, ])

  return <BannerOptionContext.Provider value={dataReturn}>{children}</BannerOptionContext.Provider>
}

export default BannerOptionContext

export { BannerOptionProvider }
