import { createContext, useEffect, useState } from 'react'
import serviceApi from '../service/service'
import { ContextProps } from '../interface/props'
import { BannerContext } from '../interface/context'
import { BANNER_CONTEXT, ERROR_DATA_ARTIST } from '../constant/context'
import { ArtistList } from '../interface/artistMusic'
import { ErrorRoot } from '../interface/error'
import { AlbumMusic } from '../interface/albumMusic'

const BannerOptionContext = createContext<BannerContext>(BANNER_CONTEXT)

const BannerOptionProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState<ArtistList | ErrorRoot | AlbumMusic >(ERROR_DATA_ARTIST)
  const [dataReturn, setDataReturn] = useState<BannerContext>(BANNER_CONTEXT)
  const [autor, setAutor] = useState('')
  const [loading, setLoading] = useState(false)
  const [option, setOption] = useState('artist')
  const handleNewData = (id: number) => {
    if(option === 'artist'){
      musicArtist(id)
    }else{
      musicAlbum
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
    const dataUpdate: BannerContext = {
      handleNewData,
      loading,
      data,
      autor,
      setAutor
    }
    setDataReturn(dataUpdate)
  }, [data, loading])

  return <BannerOptionContext.Provider value={dataReturn}>{children}</BannerOptionContext.Provider>
}

export default BannerOptionContext

export { BannerOptionProvider }
