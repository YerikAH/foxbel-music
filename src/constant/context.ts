import { RootGeneral, RootMusic } from '../interface/context'
import { CHART_INIT } from './chart'

export const CONTEXT_INIT: RootGeneral = {
  root: CHART_INIT,
  loader: false,
  handleContext(){return}
}
export const CONTEXT_MUSIC_INIT: RootMusic = {
  currentIndex: 0,
  data: null,
  handleBackMusic() {
    return 
  },
  handleNextMusix(){
    return
  },
  handleMusicNew(){
    return
  }
  

}