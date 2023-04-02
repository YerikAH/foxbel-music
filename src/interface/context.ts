import { Root } from './chart'

export interface RootGeneral {
  root: Root | null
  loader: boolean
}

export interface RootMusic {
  currentIndex: number
  id: number
  handleNextMusix(): void
  handleBackMusic():void
  handleNewMusic(id:number):void
}
