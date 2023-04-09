import { useContext } from 'react'
import { DetailsMusicProps } from '../../../interface/props'
import * as style from '../../../styles/banner'
import IconVerticalDots from '../../icons/IconVerticalDots'
import PlayerContext from '../../../context/playerContext'

const BannerInfo = ({ data, extra }: DetailsMusicProps) => {
  const playerContext = useContext(PlayerContext)

  return (
    <PlayerContext.Provider value={playerContext}>
      <style.BoxAllContent>
        <style.BoxImage className={data?.album.cover_xl ?? ''}></style.BoxImage>
        <style.BoxContent>
          <style.HeadlinePrincipal>{data?.artist.name ?? 'Error'}</style.HeadlinePrincipal>
          <style.BoxFlexLinear>
            <style.HeadlineSecondary>{data?.album.title ?? 'Error'}</style.HeadlineSecondary>
            <style.TextSpan>{data?.rank} seguidores</style.TextSpan>
          </style.BoxFlexLinear>
          <style.TextBody dangerouslySetInnerHTML={{ __html: extra ?? '' }}></style.TextBody>
          <style.BoxButtons>
            <style.ButtonStroker onClick={() => playerContext.handleClick()}>
              {!playerContext.isPlaying ? 'Reproducir' : 'Pausar'}
            </style.ButtonStroker>
            <style.ButtonStroker className='stroke'>Seguir</style.ButtonStroker>
            <style.ButtonImage>
              <IconVerticalDots />
            </style.ButtonImage>
          </style.BoxButtons>
        </style.BoxContent>
      </style.BoxAllContent>
    </PlayerContext.Provider>
  )
}

export default BannerInfo
