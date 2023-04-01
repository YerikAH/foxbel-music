import { useEffect, useState } from 'react'
import { Root } from '../interface/search'
import { SEARCH_CONST } from '../components/constant/constant'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '850bf54e0cmsh9b8eec57c2cb224p149139jsn23796c16c3f6',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
  },
}
export function useFetch() {
  const [dataJson, setDataJson] = useState<Root | null>(SEARCH_CONST)
  const [load, setLoad] = useState(false)
  useEffect(() => {
    const getData = async () => {
      setLoad(true)
      try {
        const res = await fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=adele', options)
        const json: Promise<Root> = await res.json()
        if (!res.ok) {
          const errorObj = {
            statusText: res.statusText,
            status: res.status,
          }
          throw errorObj
        }
        const data = await json
        setDataJson(data)
      } catch (err) {
        setDataJson(null)
      } finally {
        setLoad(false)
      }
    }
    getData()
  }, [])
  return { dataJson, load }
}
