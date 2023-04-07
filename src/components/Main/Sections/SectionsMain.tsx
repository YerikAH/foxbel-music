import { useContext, useEffect, useRef, useState } from 'react'
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
  }, [fetchContext.root])

  function limitScroll(element: HTMLElement) {
    const moveScroll = element.scrollTop
    const maxScroll = element.scrollHeight - element.clientHeight
    const condition = moveScroll === maxScroll || (moveScroll === 0 && maxScroll === 0)
    // console.log('-cumpole')
    if (condition) {
      fetchContext.handleContext()
    }
    // const fetchData = async () => {
    //   while (condition) {
    //     await new Promise(resolve => setTimeout(resolve, 1000));
    //     console.log('nueva peticion')
    //     fetchContext.handleContext();
    //   }
    // };
  }

  return (
    <style.SectionBox onScroll={(e) => handleScroll(e)} ref={refElement}>
      {location.pathname === PathRoutes.recent && <Recent />}
      {location.pathname === PathRoutes.artist && <Artist />}
    </style.SectionBox>
  )
}

export default SectionsMain
