import { useContext, useEffect, useState } from 'react'
import { DetailsMusicProps } from '../../../interface/props'
import * as style from '../../../styles/banner'
import IconVerticalDots from '../../icons/IconVerticalDots'
import PlayerContext from '../../../context/playerContext'

const BannerInfo = ({data}: DetailsMusicProps) => {
  const playerContext = useContext(PlayerContext)
    const [numberRandom, setNumberRandom] = useState(0)
    useEffect(() => {
        const randomNum = Math.floor(Math.random() * 999000000) + 1000000;
        setNumberRandom(randomNum)
    }, [data])
    
  return (
    <PlayerContext.Provider value={playerContext}>
      <style.BoxAllContent>
        <style.BoxImage className={data?.album.cover_xl ?? ''}></style.BoxImage>
        <style.BoxContent>
          <style.HeadlinePrincipal>{data?.artist.name ?? 'Error'}</style.HeadlinePrincipal>
          <style.BoxFlexLinear>
            <style.HeadlineSecondary>{data?.album.title ?? 'Error'}</style.HeadlineSecondary>
            <style.TextSpan>{numberRandom} seguidores</style.TextSpan>
          </style.BoxFlexLinear>
          <style.TextBody>
          La música es el lenguaje universal que nos une a todos, un poderoso vehículo de emociones y sentimientos que trasciende fronteras y culturas. Desde las notas más suaves hasta las melodías más vibrantes, la música es capaz de transportarnos a lugares que nunca imaginamos y hacernos sentir vivos como nunca antes. Déjate llevar por su magia y encuentra en ella un refugio para tu alma.
          </style.TextBody>
          <style.BoxButtons>
            <style.ButtonStroker onClick={()=>playerContext.handleClick()}>{!playerContext.isPlaying ? 'Reproducir' : 'Pausar'}</style.ButtonStroker>
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
