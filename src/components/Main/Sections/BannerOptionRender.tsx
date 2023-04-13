import { useContext } from 'react'
import BannerOptionContext from '../../../context/bannerOptionContext'
import * as style2 from '../../../styles/banner_option'
import Loader from '../../ui/Loader'
import MusicContext from '../../../context/musicContext'
const BannerOptionRender = () => {
  const musicContext = useContext(MusicContext)
  const bannerOptionContext = useContext(BannerOptionContext)
  return (
    <MusicContext.Provider value={musicContext}>
      <BannerOptionContext.Provider value={bannerOptionContext}>
        <style2.BannerOptions>
          {bannerOptionContext.loading ? (
            <Loader />
          ) : (
            <>
              {bannerOptionContext.renderAlbum.data.map((item, idx) => (
                <style2.BannerAllOptinos
                  key={idx}
                  onClick={() => musicContext.handleMusicNew(item)}
                >
                  <style2.BannerOptionsImage src={bannerOptionContext.autor} alt='music' />
                  <style2.BannerOptionInfo>
                    <style2.BannerMusic>{item.title}</style2.BannerMusic>
                    <style2.BannerAutor>{item.artist.name}</style2.BannerAutor>
                  </style2.BannerOptionInfo>
                </style2.BannerAllOptinos>
              ))}
              {bannerOptionContext.renderArtist.data.map((item, idx) => (
                <style2.BannerAllOptinos
                  key={idx}
                  onClick={() => musicContext.handleMusicNew(item)}
                >
                  <style2.BannerOptionsImage src={item.album.cover_xl} alt='music' />
                  <style2.BannerOptionInfo>
                    <style2.BannerMusic>{item.title}</style2.BannerMusic>
                    <style2.BannerAutor>{item.album.title}</style2.BannerAutor>
                  </style2.BannerOptionInfo>
                </style2.BannerAllOptinos>
              ))}
            </>
          )}
        </style2.BannerOptions>
      </BannerOptionContext.Provider>
    </MusicContext.Provider>
  )
}

export default BannerOptionRender
