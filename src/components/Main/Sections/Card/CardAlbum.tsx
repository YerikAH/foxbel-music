import { useContext } from 'react'
import { CardAlbumProps } from '../../../../interface/props'
import * as style from '../../../../styles/card'
import BannerOptionContext from '../../../../context/bannerOptionContext'
import MusicContext from '../../../../context/musicContext'
import { ARTIST_LIST } from '../../../../constant/constant'
const CardAlbum = ({ data }: CardAlbumProps) => {
  const musicContext = useContext(MusicContext)
  const bannerOptionContext = useContext(BannerOptionContext)
  const handleSelect = (id: number, autor: string) => {
    musicContext.selectSome(true)
    bannerOptionContext.handleNewData(id)
    bannerOptionContext.setAutor(autor)
    bannerOptionContext.setRenderArtist(ARTIST_LIST)
  }
  return (
    <MusicContext.Provider value={musicContext}>
      <BannerOptionContext.Provider value={bannerOptionContext}>
        <style.CardResult>
          <style.ButtonLink
            tabIndex={1}
            onClick={() => handleSelect(data.id, data.cover_xl)}
          ></style.ButtonLink>

          <style.BoxImageAtrr src={data.cover_xl} alt='artist' />
          <style.HeadingAutor>{data.title}</style.HeadingAutor>
          <style.TextAutor>{data.artist.name}</style.TextAutor>
        </style.CardResult>
      </BannerOptionContext.Provider>
    </MusicContext.Provider>
  )
}

export default CardAlbum
