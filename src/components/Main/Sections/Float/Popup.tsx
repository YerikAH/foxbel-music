import { useContext, useEffect, useState } from 'react'
import * as style from '../../../../styles/popup'
import { InterfaceMusic, InterfacePlaylist, PopupProps } from '../../../../interface/interface'
import { PLAYLIST_STORAGE } from '../../../../constant/constant'
import LocalStorageContext from '../../../../context/localStorageContext'

const Popup = ({ data }: PopupProps) => {
  const [playList, setPlayList] = useState<InterfacePlaylist[]>([])
  const localStorageContext = useContext(LocalStorageContext)

  const handleClick = (name: string, data: InterfaceMusic) => {
    // eslint-disable-next-line prefer-const
    let getPlaylist = playList.find((item) => item.name === name)
    getPlaylist?.music.push(data)
    localStorage.setItem(PLAYLIST_STORAGE, JSON.stringify(playList))
    localStorageContext.handleLocalStorageChange()
  }
  useEffect(() => {
    const playList = localStorage.getItem(PLAYLIST_STORAGE)
    if (playList !== null) {
      const data: InterfacePlaylist[] = JSON.parse(playList)
      setPlayList(data)
    }
  }, [localStorageContext.localStorageValue])
  return (
    <style.PopupStyles>
      {playList.map((item, idx) => (
        <style.PopupList key={idx} onClick={() => handleClick(item.name, data)}>
          {item.name}
        </style.PopupList>
      ))}
    </style.PopupStyles>
  )
}

export default Popup
