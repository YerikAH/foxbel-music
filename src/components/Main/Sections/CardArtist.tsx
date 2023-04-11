import { useContext } from 'react'
import MusicContext from '../../../context/musicContext'
import { CardArtistProps } from '../../../interface/props'
import * as style from '../../../styles/card'

const CardArtist = ({ data }: CardArtistProps) => {
  const musicContext = useContext(MusicContext)
  const handleSelect = () =>{
    musicContext.selectSome(true)
    console.log(musicContext.bannerSpecial)
  }
  return (
    <MusicContext.Provider value={musicContext}>
      <style.CardResult>
        <style.ButtonLink tabIndex={1} onClick={handleSelect}></style.ButtonLink>
        <style.BoxImageAtrr src={data.picture_xl} alt='artist' />
        <style.HeadingAutor>{data.name}</style.HeadingAutor>
      </style.CardResult>
    </MusicContext.Provider>
  )
}

export default CardArtist
