import { createContext, useEffect, useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const DZ: any // Dezzer SDK

/* interface and init state */
import { ContextProps } from '../interface/props'
import { Root } from '../interface/chart'
import { CONTEXT_INIT } from '../constant/context'
import { RootGeneral } from '../interface/context'

const FetchContext = createContext<RootGeneral>(CONTEXT_INIT)

const FetchProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState<Root | null>(null)
  const [loading, setLoading] = useState(false)
  const [dataContext, setDataContext] = useState<RootGeneral>(CONTEXT_INIT)
  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await new Promise<Root>((resolve, reject) => {
        DZ.api('/chart/0', (response: Root | null) => {
          if (response === null) {
            reject(response)
          } else {
            resolve(response)
          }
        })
      })

      enum ResProps {
        albums = 'albums',
        artists = 'artists',
        playlists = 'playlists',
        podcasts = 'podcasts',
        tracks = 'tracks',
      }
      if (data !== null) {
        const dataRes: Root = { ...data }
        for (const prop in res) {
          if (prop in dataRes) {
            const propName = prop as ResProps
            const newData =res[propName].data;
            dataRes[propName].data = dataRes[propName].data.concat([...newData])
            dataRes[propName].total += res[propName].total;
          }
        }
      }

      setData(dataRes)
    } catch (error) {
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  useEffect(() => {
    if (data !== null) {
      const valueGeneral: RootGeneral = {
        loader: loading,
        root: data,
      }
      setDataContext(valueGeneral)
    }
  }, [data, loading])

  return <FetchContext.Provider value={dataContext}>{children}</FetchContext.Provider>
}

export default FetchContext
export { FetchProvider }
