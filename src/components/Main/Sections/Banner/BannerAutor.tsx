import { DetailsMusicProps } from '../../../../interface/props'
import * as style from '../../../../styles/banner'
import placeImage from '../../../../assets/foxbel-music-icon@3x.png'
import PlayerContext from '../../../../context/playerContext'
import { useContext } from 'react'
import IconPause from '../../../icons/IconPause'
import IconPlay from '../../../icons/IconPlay'
const BannerAutor = ({ data }: DetailsMusicProps) => {
  const playerContext = useContext(PlayerContext)
  return (
    <PlayerContext.Provider value={playerContext}>
      <style.BoxImageResponsive>
        <style.ButtonIconPlayer onClick={() => playerContext.handleClick()}>
          {playerContext.isPlaying ? <IconPause /> : <IconPlay />}
        </style.ButtonIconPlayer>
        <style.ImageAutor src={data?.artist?.picture_big ?? placeImage} alt='autor' />
      </style.BoxImageResponsive>
    </PlayerContext.Provider>
  )
}

export default BannerAutor
