import { useContext, useEffect, useRef } from 'react'
import * as style from '../../../styles/main'
import MusicContext from '../../../context/musicContext'
import FetchContext from '../../../context/fetchContext'
import { useLocation } from 'react-router-dom'
import { PathRoutes } from '../../../enum/enum'
import Recent from './Recent'
import Artist from './Artist'
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
    console.log('nueva peticion')
  }, [fetchContext.root,refElement.current?.scrollTop])

  function limitScroll(element: HTMLElement) {
    const moveScroll = element.scrollTop
    const maxScroll = element.scrollHeight - element.clientHeight
    const condition = moveScroll >= maxScroll - 200 || (moveScroll === 0 && maxScroll === 0)
    console.info(moveScroll, maxScroll)
    if (condition) fetchContext.handleContext()
  }

  return (
    <style.SectionBox onScroll={(e) => handleScroll(e)} ref={refElement}>
      {location.pathname === PathRoutes.recent && <Recent />}
      {location.pathname === PathRoutes.artist && <Artist />}
    </style.SectionBox>
  )
}

export default SectionsMain
