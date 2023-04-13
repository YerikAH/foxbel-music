import { AlbumMusic } from './albumMusic'
import { ArtistList } from './artistMusic'
import { Daum, Root } from './chart'
import { ErrorRoot } from './error'

export interface RootGeneral {
  root: Root | null
  loader: boolean
  handleContext(): void
}

export interface RootMusic {
  currentIndex: number
  data: Daum | null
  handleManager(value: boolean):void
  handleMusicNew(dataProp: Daum): void
  handleAddAllData(data: Root): void
  allData: Root
  bannerSpecial : boolean
  selectSome(value: boolean): void
}

export interface BannerContext {
  loading: boolean
  data: ArtistList | ErrorRoot | AlbumMusic
  handleNewData(id: number): void
  autor: string;
  setAutor: (nuevoAutor: string) => void;
  setRenderAlbum:(data: AlbumMusic) => void;
  setRenderArtist:(data: ArtistList) => void;
  renderArtist: ArtistList;
  renderAlbum: AlbumMusic
}