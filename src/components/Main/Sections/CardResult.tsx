import { useContext } from 'react'
import { CardResultProps } from '../../../interface/props'
import * as style from '../../../styles/card_result'
import MusicContext from '../../../context/musicContext'
import IconDots from '../../icons/IconDots'
import IconPlay from '../../icons/IconPlay'

const CardResult = ({ autor, title, url, id }: CardResultProps) => {
  const musicContext = useContext(MusicContext)
  const handleClick =(id: number)=>{
    console.log('HOla mundo')
    musicContext.handleNewMusic(id)
  }
  return (
    <MusicContext.Provider value={musicContext}>
      <style.CardResult>
        <style.BoxImage className={url}>
          <style.BoxImageButton onClick={()=>handleClick(id)}>
            <IconPlay />
          </style.BoxImageButton>
          <style.BoxImageOptions>
            <IconDots />
          </style.BoxImageOptions>
        </style.BoxImage>
        <style.HeadingMusic>{title}</style.HeadingMusic>
        <style.TextAutor>{autor}</style.TextAutor>
      </style.CardResult>
    </MusicContext.Provider>
  )
}

export default CardResult
