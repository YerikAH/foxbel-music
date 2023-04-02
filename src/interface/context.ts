import { Daum, Root } from './chart'

export interface RootGeneral {
  root: Root | null
  loader: boolean
}

export interface RootMusic {
  currentIndex: number
  data: Daum | null
  handleNextMusix(): void
  handleBackMusic():void
  handleMusicNew(dataProp: Daum): void
}
