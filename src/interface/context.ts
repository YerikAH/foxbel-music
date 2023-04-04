import { Daum, Root } from './chart'

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
}
