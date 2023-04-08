import { useContext, useEffect, useRef } from 'react'
import * as style from '../../../styles/main'
import MusicContext from '../../../context/musicContext'
import FetchContext from '../../../context/fetchContext'
import { useLocation } from 'react-router-dom'
import { PathRoutes } from '../../../enum/enum'
import Recent from './Recent'
import Artist from './Artist'
import Album from './Album'
import Podcast from './Podcast'
const SectionsMain = () => {
  const musicContext = useContext(MusicContext)
  const fetchContext = useContext(FetchContext)
  const refElement = useRef<HTMLElement>(null)
  const location = useLocation()

  const handleScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    const elementScroll = e.target as HTMLElement
    limitScroll(elementScroll)
  }

  useEffect(() => {
    const data = fetchContext.root
    const element = refElement.current
    if (data !== null) musicContext.handleAddAllData(data)
    if (element !== null) limitScroll(element)
  }, [fetchContext.root])

  function limitScroll(element: HTMLElement) {
    const moveScroll = element.scrollTop
    const maxScroll = element.scrollHeight - element.clientHeight
    const condition = moveScroll === maxScroll || (moveScroll === 0 && maxScroll === 0)
    if (condition) {
      fetchContext.handleContext()
    }
  }

  return (
    <style.SectionBox onScroll={(e) => handleScroll(e)} ref={refElement}>
      {location.pathname === PathRoutes.recent && <Recent />}
      {location.pathname === PathRoutes.artist && <Artist />}
      {location.pathname === PathRoutes.albums && <Album />}
      {location.pathname === PathRoutes.podcast && <Podcast />}
    </style.SectionBox>
  )
}

export default SectionsMain
