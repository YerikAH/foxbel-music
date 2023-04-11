import { BannerContext, RootGeneral, RootMusic } from '../interface/context'
import { CHART_INIT } from './chart'

export const CONTEXT_INIT: RootGeneral = {
  root: CHART_INIT,
  loader: false,
  handleContext(){return}
}
export const CONTEXT_MUSIC_INIT: RootMusic = {
  currentIndex: 0,
  data: null,
  handleManager() {
    return 
  },
  handleMusicNew(){
    return
  },
  handleAddAllData(){
    return
  },
  allData: CHART_INIT,
  selectSome() {
    return
  },
  bannerSpecial: false
}
export const ERROR_DATA_ARTIST = {
  error:{
    code: 0,
    message: '',
    type: ''
  }
}
export const BANNER_CONTEXT:BannerContext  = {
  loading: false,
  data: ERROR_DATA_ARTIST,
  handleNewData(){
    return
  },
  autor: '',
  setAutor(){
    return
  }
}