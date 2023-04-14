import { useContext, useEffect } from 'react'
import BannerOptionContext from '../../../../context/bannerOptionContext'
import * as style from '../../../../styles/banner'
import * as style2 from '../../../../styles/banner_option'
import { ArtistList } from '../../../../interface/artistMusic'
import PlaceImage from '../../../../assets/foxbel-music.png'
import { ErrorRoot } from '../../../../interface/error'
import { AlbumMusic } from '../../../../interface/albumMusic'
import BannerOptionRender from './BannerOptionRender'

const BannerOption = () => {
  const bannerOptionContext = useContext(BannerOptionContext)
  useEffect(() => {
    const dataError = bannerOptionContext.data as ErrorRoot
    if (dataError.error) {
      // error code
      return
    }

    const dataNotError = bannerOptionContext.data as ArtistList
    if (dataNotError.next !== undefined) {
      bannerOptionContext.setRenderArtist(dataNotError)
    } else {
      const newData = bannerOptionContext.data as AlbumMusic
      bannerOptionContext.setRenderAlbum(newData)
    }
  }, [bannerOptionContext.data, bannerOptionContext.loading, bannerOptionContext.autor])

  return (
    <BannerOptionContext.Provider value={bannerOptionContext}>
      <style.SectionBanner>
        <style2.BannerOptionPrincipal>
          <style2.BannerImagePrincipal
            src={`${bannerOptionContext.autor}?timestamp=${Date.now()}` ?? PlaceImage}
            alt='img'
          />
        </style2.BannerOptionPrincipal>
        <BannerOptionRender />
      </style.SectionBanner>
    </BannerOptionContext.Provider>
  )
}

export default BannerOption
