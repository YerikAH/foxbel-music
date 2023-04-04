import { useContext } from 'react'
import { CardResultProps } from '../../../interface/props'
import * as style from '../../../styles/card_result'
import MusicContext from '../../../context/musicContext'
import IconDots from '../../icons/IconDots'
import IconPlay from '../../icons/IconPlay'
import { Daum } from '../../../interface/chart'

const CardResult = ({ data }: CardResultProps) => {
  const musicContext = useContext(MusicContext)
  const handleClick =(data: Daum)=>{
    musicContext.handleMusicNew(data)
  }
  return (
    <MusicContext.Provider value={musicContext}>
      <style.CardResult>
        <style.BoxImage className={data.album?.cover_big}>
          <style.BoxImageButton onClick={()=>handleClick(data)}>
            <IconPlay />
          </style.BoxImageButton>
          <style.BoxImageOptions>
            <IconDots />
          </style.BoxImageOptions>
        </style.BoxImage>
        <style.HeadingMusic>{data.title_short}</style.HeadingMusic>
        <style.TextAutor>{data.artist.name}</style.TextAutor>
      </style.CardResult>
    </MusicContext.Provider>
  )
}

export default CardResult
