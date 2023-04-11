import { useContext, useEffect, useState } from 'react'
import BannerOptionContext from '../../../context/bannerOptionContext'
import * as style from '../../../styles/banner'
import * as style2 from '../../../styles/banner_option'
import { ArtistList, ArtistListError } from '../../../interface/artistMusic'
import { ARTIST_LIST } from '../../../constant/constant'
const BannerOption = () => {
  const bannerOptionContext = useContext(BannerOptionContext)
  const [data, setData] = useState<ArtistList>(ARTIST_LIST)
  useEffect(() => {
    const dataError = bannerOptionContext.data as ArtistListError
    if (dataError.error) {
      return
      // here code for the error
    }else{
      const dataNotError = bannerOptionContext.data as ArtistList
      setData(dataNotError)
    }
  }, [bannerOptionContext.data])
  
  return (
    <BannerOptionContext.Provider value={bannerOptionContext}>
      <style.SectionBanner>
        <style2.BannerOptionPrincipal>
          <style2.BannerImagePrincipal
            src={data?.data[0]?.album.cover_xl ?? ''}
            alt='img'
          />
        </style2.BannerOptionPrincipal>
        <style2.BannerOptions>
          {data.data.map((item, idx) =>(

          <style2.BannerAllOptinos key={idx}>
            <style2.BannerOptionsImage
              src={item.album.cover_xl}
              alt='music'
            />
            <style2.BannerOptionInfo>
              <style2.BannerMusic>{item.title}</style2.BannerMusic>
              <style2.BannerAutor>{item.album.title}</style2.BannerAutor>
            </style2.BannerOptionInfo>
          </style2.BannerAllOptinos>

          ))}
        </style2.BannerOptions>
      </style.SectionBanner>
    </BannerOptionContext.Provider>
  )
}

export default BannerOption
