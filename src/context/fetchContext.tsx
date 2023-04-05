import { createContext, useEffect, useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const DZ: any // Dezzer SDK

/* interface and init state */
import { ContextProps } from '../interface/props'
import { Root } from '../interface/chart'
import { CONTEXT_INIT } from '../constant/context'
import { RootGeneral } from '../interface/context'
import { PathRoutes, ResProps } from '../enum/enum'
import { useLocation } from 'react-router-dom'

const FetchContext = createContext<RootGeneral>(CONTEXT_INIT)

const FetchProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState<Root | null>(null)
  const [option, setOption] = useState<ResProps>(ResProps.tracks)
  const [loading, setLoading] = useState(false)
  const [index, setIndex] = useState(0)
  const [dataContext, setDataContext] = useState<RootGeneral>(CONTEXT_INIT)
  const location = useLocation()
  
  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await new Promise<Root>((resolve, reject) => {
        DZ.api(`/chart/${index}`, (response: Root | null) => {
          if (response === null) {
            reject(response)
          } else {
            resolve(response)
          }
        })
      })
      if (data === null) {
        setData(res)
        return 
      }
      if(Object.values(res).every(prop => prop.total === 0)){
        setIndex(index + 1)
        return 
      }     
      setData({
        ...data,
        [option]:{
          data:[...data[option].data, ...res[option].data],
          total: data[option].data.length
        }
      })
    } catch (error) {
      setData(null)
    } finally {
      setLoading(false)
    }
  }
  function handleContext (){
    setIndex(index + 1)
    fetchData()
  }

  useEffect(() => {
    handleContext()
  }, [])

  useEffect(() => {
    const pathApp = [
      PathRoutes.albums,
      PathRoutes.artist,
      PathRoutes.podcast,
      PathRoutes.podcast
    ]
    if(location.pathname === PathRoutes.recent){
      setOption(ResProps.tracks)
    }else if(location.pathname === PathRoutes.albums){
      setOption(ResProps.albums)
    }else if(location.pathname === PathRoutes.artist){
      setOption(ResProps.artists)
    }else if(location.pathname === PathRoutes.podcast){
      setOption(ResProps.podcasts)
    }
  }, [location])
  
  useEffect(() => {
    if (data !== null) {
      const valueGeneral: RootGeneral = {
        loader: loading,
        root: data,
        handleContext: handleContext
      }
      setDataContext(valueGeneral)
    }
  }, [data, loading])

  return <FetchContext.Provider value={dataContext}>{children}</FetchContext.Provider>
}

export default FetchContext
export { FetchProvider }
