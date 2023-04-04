import { ResProps } from '../enum/enum'
import { RootSearch } from '../interface/search'

export const SEARCH_CONST: RootSearch = {
  data: [],
  next: '',
  prev: '',
  total: 0,
}

export const OPTION_CONST: ResProps[]=[
  ResProps.albums,
  ResProps.artists,
  ResProps.playlists,
  ResProps.podcasts,
  ResProps.tracks
]