import { AllOptions, PathRoutes, ResProps } from '../enum/enum'
import { MenuOptions } from '../interface/interface'
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

export const LINK_LIBRARY: MenuOptions[] = [
  {
    name: AllOptions.recent,
    value: true,
    path: PathRoutes.recent
  },
  {
    name: AllOptions.artist,
    value: false,
    path: PathRoutes.artist
  },
  {
    name: AllOptions.albums,
    value: false,
    path: PathRoutes.albums
  },
  {
    name: AllOptions.podcast,
    value: false,
    path: PathRoutes.podcast
  },
]
