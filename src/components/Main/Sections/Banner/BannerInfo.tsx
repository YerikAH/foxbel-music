import { useContext, useEffect, useState } from 'react'
import { DetailsMusicProps } from '../../../../interface/props'
import * as style from '../../../../styles/banner'
import IconVerticalDots from '../../../icons/IconVerticalDots'
import PlayerContext from '../../../../context/playerContext'
import LocalStorageContext from '../../../../context/localStorageContext'
import Modal from '../Float/Modal'
import Popup from '../Float/Popup'
import { InterfaceMusic } from '../../../../interface/interface'

const BannerInfo = ({ data, extra }: DetailsMusicProps) => {
  const playerContext = useContext(PlayerContext)
  const [open, setOpen] = useState(false)
  const localStorageContext = useContext(LocalStorageContext)
  const [openModal, setOpenModal] = useState(false)
  const [dataPopup, setDataPopup] = useState<InterfaceMusic>({autor:'', id:0,image:'',name:''})
  const handlePopup = () =>{ 
    if(localStorageContext.localStorageValue === null || localStorageContext.localStorageValue.length === 2){
      setOpenModal(true)
      return
    }
    setOpen(!open)
  
  }
  useEffect(() => {
    if(data !== null){

      const constData:InterfaceMusic = {
        autor: data?.artist?.name ?? '',
        id: data?.id ?? 0,
        image: data?.album?.cover_xl ?? '',
        name: data?.title?? ''
      }
      setDataPopup(constData)
    }
    
  }, [data])
  
  return (
    <PlayerContext.Provider value={playerContext}>
      <style.BoxAllContent>
        <style.BoxImage className={data?.album?.cover_xl ?? ''}></style.BoxImage>
        <style.BoxContent>
          <style.HeadlinePrincipal>{data?.artist?.name ?? 'Error'}</style.HeadlinePrincipal>
          <style.BoxFlexLinear>
            <style.HeadlineSecondary>{data?.album?.title ?? 'Error'}</style.HeadlineSecondary>
            <style.TextSpan>{data?.rank} seguidores</style.TextSpan>
          </style.BoxFlexLinear>
          <style.TextBody dangerouslySetInnerHTML={{ __html: extra ?? '' }}></style.TextBody>
          <style.BoxButtons>
          {openModal && <Modal setOpenModal={setOpenModal} />}
            <style.ButtonStroker onClick={() => playerContext.handleClick()}>
              {!playerContext.isPlaying ? 'Reproducir' : 'Pausar'}
            </style.ButtonStroker>
            <style.ButtonStroker className='stroke'>Seguir</style.ButtonStroker>
            <style.ButtonImage onClick={handlePopup}>
              <IconVerticalDots />
            {open && <Popup data={dataPopup}/>}
            </style.ButtonImage>
          </style.BoxButtons>
        </style.BoxContent>
  
      </style.BoxAllContent>
    </PlayerContext.Provider>
  )
}

export default BannerInfo
