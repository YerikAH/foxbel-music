import { createContext, useEffect, useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const DZ: any // Dezzer SDK

/* interface and init state */
import { ContextProps } from '../interface/props'
import { Root } from '../interface/chart'
import { CONTEXT_INIT } from '../constant/context'
import { RootGeneral } from '../interface/context'
import { ResProps } from '../enum/enum'

const FetchContext = createContext<RootGeneral>(CONTEXT_INIT)

const FetchProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState<Root | null>(null)
  const [option, setOption] = useState<ResProps>(ResProps.tracks)
  const [loading, setLoading] = useState(false)
  const [index, setIndex] = useState(0)
  const [dataContext, setDataContext] = useState<RootGeneral>(CONTEXT_INIT)
  
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

 
      // const propOrder = [
      //   ResProps.albums,
      //   ResProps.artists,
      //   ResProps.playlists,
      //   ResProps.podcasts,
      //   ResProps.tracks,
      // ];
      if (data === null) {
          setData(res)
        return 
      }
      // const newElement: Root ={...data}
      // for (let i = 0; i < Object.keys(newElement).length; i++) {
      //   const element = newElement[propOrder[i]];
      //   element.data= [...data.albums.data, ...res.albums.data]
      // }
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
  const handleContext = () =>{
    fetchData()
    setIndex(index + 1)
  }

  useEffect(() => {
    handleContext()
  }, [])
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
