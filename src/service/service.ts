import { WIKI_NOT_FOUND } from '../constant/data'
import { Artist, Root } from '../interface/chart'
import { ErrorArtist } from '../interface/error'
import { RootSearch } from '../interface/search'
import { SearchWiki, WikiNotFound } from '../interface/searchWiki'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const DZ: any // Dezzer SDK

const pathApi = {
  search: '/search?q=',
  searchWiki:
    'https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=',
}

const serviceApi = {
  search: (query: string): Promise<RootSearch | null> => {
    return new Promise<RootSearch | null>((resolve, reject) => {
      DZ.api(pathApi.search + query, (response: RootSearch | null) => {
        if (response === null) {
          return reject(response)
        }
        resolve(response)
      })
    })
  },

  searchWiki: (query: string): Promise<SearchWiki | WikiNotFound> => {
    return new Promise((resolve, reject) => {
      fetch(pathApi.searchWiki + query)
        .then((res) => {
          if (!res.ok) reject(WIKI_NOT_FOUND)
          return res.json()
        })
        .then((json) => {
          resolve(json)
        })
        .catch((err: WikiNotFound) => {
          resolve(err)
        })
    })
  },

  chart: (index: number): Promise<Root | null> => {
    return new Promise<Root | null>((resolve, reject) => {
      DZ.api(`/chart/${index}`, (response: Root | null) => {
        if (response === null) {
          return reject(response)
        }
        resolve(response)
      })
    })
  },

  artist: (id: number): Promise<Artist | ErrorArtist> => {
    return new Promise<Artist | ErrorArtist>((resolve, reject) => {
      DZ.api(`/a/${id}`, (response: Artist | ErrorArtist) => {
        if (response) {
          return reject(response)
        }
        resolve(response)
      })
    })
  },
}
export default serviceApi
