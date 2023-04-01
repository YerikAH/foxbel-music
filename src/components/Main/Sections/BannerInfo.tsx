import { useEffect, useState } from 'react'
import { DetailsMusicProps } from '../../../interface/props'
import * as style from '../../../styles/banner'
import IconVerticalDots from '../../icons/IconVerticalDots'

const BannerInfo = ({data}: DetailsMusicProps) => {
    const [numberRandom, setNumberRandom] = useState(0)
    useEffect(() => {
        const randomNum = Math.floor(Math.random() * 999000000) + 1000000;
        setNumberRandom(randomNum)
    }, [data])
    
  return (
    <style.BoxAllContent>
      <style.BoxImage className={data?.album.cover_xl ?? ''}></style.BoxImage>
      <style.BoxContent>
        <style.HeadlinePrincipal>{data?.artist.name ?? 'Error'}</style.HeadlinePrincipal>
        <style.BoxFlexLinear>
          <style.HeadlineSecondary>{data?.album.title ?? 'Error'}</style.HeadlineSecondary>
          <style.TextSpan>{numberRandom} seguidores</style.TextSpan>
        </style.BoxFlexLinear>
        <style.TextBody>
          {data?.duration ?? 'Error'}
        </style.TextBody>
        <style.BoxButtons>
          <style.ButtonStroker>Reproducir</style.ButtonStroker>
          <style.ButtonStroker className='stroke'>Seguir</style.ButtonStroker>
          <style.ButtonImage>
            <IconVerticalDots />
          </style.ButtonImage>
        </style.BoxButtons>
      </style.BoxContent>
    </style.BoxAllContent>
  )
}

export default BannerInfo
