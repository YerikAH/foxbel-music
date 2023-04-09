import { useEffect, useState } from 'react'
import { SearchWiki, WikiNotFound } from '../interface/searchWiki'
import { WIKI_NOT_FOUND } from '../constant/data'
import serviceApi from '../service/service'


function useSearchWiki(query: string) {
  const [data, setData] = useState<SearchWiki | WikiNotFound>(WIKI_NOT_FOUND)
  const [loading, setLoading] = useState(false)
  const [dataReturn, setDataReturn] = useState<SearchWiki | WikiNotFound>(WIKI_NOT_FOUND)

  useEffect(() => {
    if (query.length > 2) {
      setLoading(true)
      serviceApi
        .searchWiki(query)
        .then((res) => {
          setData(res)
        })
        .catch((err: WikiNotFound) => {
          setData(err)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [query])
  useEffect(() => {
    if (data !== null) {
      setDataReturn(data)
    }
  }, [data, loading])
  return { loading, dataReturn }
}
export { useSearchWiki }
