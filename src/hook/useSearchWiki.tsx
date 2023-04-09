import { useEffect, useState } from 'react'
import { SearchWiki, WikiNotFound } from '../interface/searchWiki'
import { WIKI_NOT_FOUND } from '../constant/data'
function useSearchWiki(query: string) {
  const [data, setData] = useState<SearchWiki | WikiNotFound>(WIKI_NOT_FOUND)
  const [loading, setLoading] = useState(false)
  const [dataReturn, setDataReturn] = useState<SearchWiki | WikiNotFound>(WIKI_NOT_FOUND)
  const fetchData = async (query: string) => {
    setLoading(true)
    const url =
      'https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch='
    try {
      const res = await fetch(`${url}${query}`)
      console.log(`${url}${query}`)
      const json = await res.json()
      if (!res.ok) throw new Error('Error')
      setData(json)
    } catch (error) {
      setData(WIKI_NOT_FOUND)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (query.length > 2) fetchData(query)
  }, [query])
  useEffect(() => {
    if (data !== null) {
      setDataReturn(data)
    }
  }, [data, loading])
  return { loading, dataReturn }
}
export { useSearchWiki }
