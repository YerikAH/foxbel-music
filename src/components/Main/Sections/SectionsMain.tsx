import { useContext, useEffect, useRef } from 'react'
import * as style from '../../../styles/main'
import MusicContext from '../../../context/musicContext'
import FetchContext from '../../../context/fetchContext'
import Page from './Page'
const SectionsMain = () => {
  const musicContext = useContext(MusicContext)
  const fetchContext = useContext(FetchContext)
  const refElement = useRef<HTMLElement>(null)

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
      <Page/>
    </style.SectionBox>
  )
}

export default SectionsMain
