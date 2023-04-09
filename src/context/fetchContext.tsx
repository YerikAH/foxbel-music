import { createContext, useEffect, useState } from 'react'
/* interface and init state */
import { ContextProps } from '../interface/props'
import { Root } from '../interface/chart'
import { CONTEXT_INIT } from '../constant/context'
import { RootGeneral } from '../interface/context'
import { ResProps } from '../enum/enum'
import { useLocation } from 'react-router-dom'
import { routeSearch } from '../helpers/helpers'
import serviceApi from '../service/service'

const FetchContext = createContext<RootGeneral>(CONTEXT_INIT)

const FetchProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState<Root | null>(null)
  const [option, setOption] = useState<ResProps>(ResProps.tracks)
  const [loading, setLoading] = useState(false)
  const [index, setIndex] = useState(0)
  const [dataContext, setDataContext] = useState<RootGeneral>(CONTEXT_INIT)
  const location = useLocation()

  const fetchData = () => {
    setLoading(true)
    serviceApi
      .chart(index)
      .then((res) => {
        if (data === null) {
          setData(res)
          return
        }
        const { data: newData } = res![option]
        setData({
          ...data,
          [option]: {
            data: [...data[option].data, ...newData],
            total: newData.length,
          },
        })
      })
      .catch((err) => {
        setData(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  function handleContext() {
    setIndex(index + 1)
    fetchData()
  }

  useEffect(() => {
    handleContext()
  }, [])

  useEffect(() => {
    const option = routeSearch(location.pathname)
    setOption(option)
  }, [location])

  useEffect(() => {
    if (data !== null) {
      const valueGeneral: RootGeneral = {
        loader: loading,
        root: data,
        handleContext: handleContext,
      }
      setDataContext(valueGeneral)
    }
  }, [data, loading])

  return <FetchContext.Provider value={dataContext}>{children}</FetchContext.Provider>
}

export default FetchContext
export { FetchProvider }
