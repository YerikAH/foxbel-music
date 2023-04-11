export interface ArtistList {
  data: Datum[]
  total: number
  next: string
}

export interface Datum {
  id: number
  readable: boolean
  title: string
  title_short: string
  title_version: TitleVersion
  link: string
  duration: number
  rank: number
  explicit_lyrics: boolean
  explicit_content_lyrics: number
  explicit_content_cover: number
  preview: string
  contributors: Contributor[]
  md5_image: string
  artist: Artist
  album: Album
  type: DatumType
}

export interface Album {
  id: number
  title: string
  cover: string
  cover_small: string
  cover_medium: string
  cover_big: string
  cover_xl: string
  md5_image: string
  tracklist: string
  type: AlbumType
}

export enum AlbumType {
  Album = 'album',
}

export interface Artist {
  id: number
  name: Name
  tracklist: string
  type: ArtistType
}

export enum Name {
  DaftPunk = 'Daft Punk',
  VariousArtists = 'Various Artists',
}

export enum ArtistType {
  Artist = 'artist',
}

export interface Contributor {
  id: number
  name: string
  link: string
  share: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  radio: boolean
  tracklist: string
  type: ArtistType
  role: Role
}

export enum Role {
  Featured = 'Featured',
  Main = 'Main',
}

export enum TitleVersion {
  AliveRadioEdit2007 = '(Alive Radio Edit 2007)',
  Empty = '',
  FromTRONLegacyScore = '(From "TRON: Legacy"/Score)',
  RadioEdit = '(Radio Edit)',
  ShortRadioEdit = '(Short Radio Edit)',
}

export enum DatumType {
  Track = 'track',
}
