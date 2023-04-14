import { useContext } from 'react'
import MusicContext from '../../../../context/musicContext'
import { CardArtistProps } from '../../../../interface/props'
import * as style from '../../../../styles/card'
import BannerOptionContext from '../../../../context/bannerOptionContext'
import { ALBUM_LIST } from '../../../../constant/constant'

const CardArtist = ({ data }: CardArtistProps) => {
  const musicContext = useContext(MusicContext)
  const bannerOptionContext = useContext(BannerOptionContext)
  const handleSelect = (id: number, autor: string) => {
    musicContext.selectSome(true)
    bannerOptionContext.handleNewData(id)
    bannerOptionContext.setAutor(autor)
    bannerOptionContext.setRenderAlbum(ALBUM_LIST)

  }
  return (
    <BannerOptionContext.Provider value={bannerOptionContext}>
      <MusicContext.Provider value={musicContext}>
        <style.CardResult>
          <style.ButtonLink tabIndex={1} onClick={() => handleSelect(data.id, data.picture_xl)}></style.ButtonLink>
          <style.BoxImageAtrr src={data.picture_xl} alt='artist' />
          <style.HeadingAutor>{data.name}</style.HeadingAutor>
        </style.CardResult>
      </MusicContext.Provider>
    </BannerOptionContext.Provider>
  )
}

export default CardArtist
