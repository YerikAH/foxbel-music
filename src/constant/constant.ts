import { AllOptions, PathRoutes, ResProps } from '../enum/enum'
import { AlbumMusic } from '../interface/albumMusic'
import { ArtistList } from '../interface/artistMusic'
import { InterfacePlaylist, MenuOptions, MenuStyles } from '../interface/interface'
import { RootSearch } from '../interface/search'

export const SEARCH_CONST: RootSearch = {
  data: [],
  next: '',
  prev: '',
  total: 0,
}

export const OPTION_CONST: ResProps[] = [
  ResProps.albums,
  ResProps.artists,
  ResProps.playlists,
  ResProps.podcasts,
  ResProps.tracks,
]

export const LINK_LIBRARY: MenuOptions[] = [
  {
    name: AllOptions.recent,
    value: false,
    path: PathRoutes.recent,
  },
  {
    name: AllOptions.artist,
    value: false,
    path: PathRoutes.artist,
  },
  {
    name: AllOptions.albums,
    value: false,
    path: PathRoutes.albums,
  },
  {
    name: AllOptions.podcast,
    value: false,
    path: PathRoutes.podcast,
  },
]
export const ARTIST_LIST: ArtistList = {
  data: [],
  next: '',
  total: 0,
}
export const ALBUM_LIST: AlbumMusic = {
  data: [],
  total: 0,
}

export const STYLE_MENU:MenuStyles = {
  left: '-100vw',
}
export const PLAYLIST_STORAGE = 'FOXBEL_PLAYLIST'
export const VARIABLE : InterfacePlaylist = {
  music: [],
  name: ''
}