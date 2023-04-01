import { DetailsMusicProps } from '../../../interface/props'
import * as style from '../../../styles/banner'
import placeImage from '../../../assets/foxbel-music-icon@3x.png'
const BannerAutor = ({data}: DetailsMusicProps) => {
  return (
    <style.BoxImageResponsive>
    <style.ImageAutor
      src={data?.artist.picture_big ?? placeImage }
      alt='autor'
    />
  </style.BoxImageResponsive>
  )
}

export default BannerAutor