import { createContext, useEffect, useState } from 'react'
import serviceApi from '../service/service'
import { ContextProps } from '../interface/props'
import { BannerContext } from '../interface/context'
import { BANNER_CONTEXT, ERROR_DATA_ARTIST } from '../constant/context'
import { ArtistList, ArtistListError } from '../interface/artistMusic'

const BannerOptionContext = createContext<BannerContext>(BANNER_CONTEXT)

const BannerOptionProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState<ArtistList | ArtistListError>(ERROR_DATA_ARTIST)
  const [dataReturn, setDataReturn] = useState<BannerContext>(BANNER_CONTEXT)
  const [loading, setLoading] = useState(false)
  const handleNewData = (id: number) => {
    setLoading(true)
    serviceApi
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

  useEffect(() => {
    const dataUpdate = {
      handleNewData,
      loading,
      data,
    }
    setDataReturn(dataUpdate)
    console.log(data)
  }, [data, loading])

  return <BannerOptionContext.Provider value={dataReturn}>{children}</BannerOptionContext.Provider>
}

export default BannerOptionContext

export { BannerOptionProvider }
