import { useEffect, useState } from 'react'
import * as style from '../../../styles/popup'
import { InterfacePlaylist } from '../../../interface/interface'
import { PLAYLIST_STORAGE } from '../../../constant/constant'

const Popup = () => {
  const [playList, setPlayList] = useState<InterfacePlaylist[]>([])
  useEffect(() => {
    let data: InterfacePlaylist[] = []
    const playList = localStorage.getItem(PLAYLIST_STORAGE)
    if (playList !== null) {
      data = JSON.parse(playList)
      setPlayList(data)
    }
  }, [localStorage.getItem(PLAYLIST_STORAGE)])
  return (
    <style.PopupStyles>
      {playList.map((item, idx) => (
        <style.PopupList key={idx}>{item.name}</style.PopupList>
      ))}
    </style.PopupStyles>
  )
}

export default Popup
