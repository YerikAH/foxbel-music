import { useEffect, useState } from 'react'
import { RootSearch } from '../interface/search'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const DZ: any // Dezzer SDK

function useSearch(query: string) {
  const [data, setData] = useState<RootSearch | null>(null)
  const [loading, setLoading] = useState(false)
  const [dataReturn, setDataReturn] = useState<RootSearch | null>(null)

  const fetchData = async (query: string) => {
    setLoading(true)
    try {
      const res = await new Promise<RootSearch | null>((resolve, reject) => {
        DZ.api('/search?q=' + query, (response: RootSearch | null) => {
          if (response === null) {
            reject(response)
          } else {
            resolve(response)
          }
        })
      })
      setData(res)
    } catch (error) {
      setData(null)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData(query)
  }, [query])
  useEffect(() => {
    if (data !== null) {
      setDataReturn(data)
    }
  }, [data, loading])
  return { loading, dataReturn }
}
export { useSearch }
