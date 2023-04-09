import { useEffect, useState } from 'react'
import { RootSearch } from '../interface/search'
import serviceApi from '../service/service'

function useSearch(query: string) {
  const [data, setData] = useState<RootSearch | null>(null)
  const [loading, setLoading] = useState(false)
  const [dataReturn, setDataReturn] = useState<RootSearch | null>(null)

  useEffect(() => {
    setLoading(true)
    serviceApi
      .search(query)
      .then((res) => {
        setData(res)
      })
      .catch(() => {
        setData(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [query])

  useEffect(() => {
    if (data !== null) {
      setDataReturn(data)
    }
  }, [data, loading])
  return { loading, dataReturn }
}
export { useSearch }
