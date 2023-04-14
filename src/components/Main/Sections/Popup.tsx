import { useEffect, useState } from 'react'
import * as style from '../../../styles/popup'
import { InterfaceMusic, InterfacePlaylist, PopupProps } from '../../../interface/interface'
import { PLAYLIST_STORAGE } from '../../../constant/constant'


const Popup = ({data}:PopupProps) => {
  const [playList, setPlayList] = useState<InterfacePlaylist[]>([])
  const handleClick = (name: string,data: InterfaceMusic) =>{
    // eslint-disable-next-line prefer-const
    let getPlaylist = playList.find(item => item.name === name)
    getPlaylist?.music.push(data)
    localStorage.setItem(PLAYLIST_STORAGE, JSON.stringify(playList))
  }
  useEffect(() => {
    const playList = localStorage.getItem(PLAYLIST_STORAGE)
    if (playList !== null) {
      const data: InterfacePlaylist[] = JSON.parse(playList)
      setPlayList(data)
    }
  }, [localStorage.getItem(PLAYLIST_STORAGE)])
  return (
    <style.PopupStyles>
      {playList.map((item, idx) => (
        <style.PopupList key={idx} onClick={()=>handleClick(item.name, data)}>{item.name}</style.PopupList>
      ))}
      {playList.length === 0 && <style.PopupText>Crea un playlist</style.PopupText> }
    </style.PopupStyles>
  )
}

export default Popup
