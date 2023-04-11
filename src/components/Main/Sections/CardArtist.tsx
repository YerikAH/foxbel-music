import { useContext } from 'react'
import MusicContext from '../../../context/musicContext'
import { CardArtistProps } from '../../../interface/props'
import * as style from '../../../styles/card'
import BannerOptionContext from '../../../context/bannerOptionContext'

const CardArtist = ({ data }: CardArtistProps) => {
  const musicContext = useContext(MusicContext)
  const bannerOptionContext = useContext(BannerOptionContext)
  const handleSelect = (id: number) => {
    musicContext.selectSome(true)
    bannerOptionContext.handleNewData(id)
    console.log(musicContext.bannerSpecial)
  }
  return (
    <BannerOptionContext.Provider value={bannerOptionContext}>
      <MusicContext.Provider value={musicContext}>
        <style.CardResult>
          <style.ButtonLink tabIndex={1} onClick={() => handleSelect(data.id)}></style.ButtonLink>
          <style.BoxImageAtrr src={data.picture_xl} alt='artist' />
          <style.HeadingAutor>{data.name}</style.HeadingAutor>
        </style.CardResult>
      </MusicContext.Provider>
    </BannerOptionContext.Provider>
  )
}

export default CardArtist
