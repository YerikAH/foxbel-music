import { useContext, useState } from 'react'
import { CardResultProps } from '../../../interface/props'
import * as style from '../../../styles/card'
import MusicContext from '../../../context/musicContext'
import IconDots from '../../icons/IconDots'
import IconPlay from '../../icons/IconPlay'
import { Daum } from '../../../interface/chart'
import Popup from './Popup'


const CardResult = ({ data }: CardResultProps) => {
  const musicContext = useContext(MusicContext)
  const [open, setOpen] = useState(false)
  const handlePopup = () => setOpen(!open)

  const handleClick =(data: Daum)=>{
    musicContext.handleMusicNew(data)
    musicContext.selectSome(false)
  }
  return (
    <MusicContext.Provider value={musicContext}>
      <style.CardResult>
      {open && <Popup/>}
        <style.BoxImage className={data.album?.cover_big}>
          <style.BoxImageButton onClick={()=>handleClick(data)}>
            <IconPlay />
          </style.BoxImageButton>
          <style.BoxImageOptions onClick={handlePopup}>
            <IconDots />
  
          </style.BoxImageOptions>
        </style.BoxImage>
        <style.HeadingMusic>{data.title_short}</style.HeadingMusic>
        <style.TextAutor>{data.artist?.name}</style.TextAutor>
      </style.CardResult>
    </MusicContext.Provider>
  )
}

export default CardResult
