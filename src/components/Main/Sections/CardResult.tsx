import { useContext, useState } from 'react'
import { CardResultProps } from '../../../interface/props'
import * as style from '../../../styles/card'
import MusicContext from '../../../context/musicContext'
import IconDots from '../../icons/IconDots'
import IconPlay from '../../icons/IconPlay'
import { Daum } from '../../../interface/chart'
import Popup from './Popup'

import { InterfaceMusic } from '../../../interface/interface'
import Modal from './Modal'
import LocalStorageContext from '../../../context/localStorageContext'


const CardResult = ({ data }: CardResultProps) => {
  const musicContext = useContext(MusicContext)
  const [open, setOpen] = useState(false)
  const localStorageContext = useContext(LocalStorageContext)
  const [openModal, setOpenModal] = useState(false)
  const handlePopup = () =>{ 
    if(localStorageContext.localStorageValue === null || localStorageContext.localStorageValue.length === 2){
      setOpenModal(true)
      return
    }
    setOpen(!open)
  
  }
  
  const handleClick =(data: Daum)=>{
    musicContext.handleMusicNew(data)
    musicContext.selectSome(false)
  }
  const dataPopup:InterfaceMusic = {
    autor: data.artist?.name ?? '',
    id: data.id,
    image: data.album?.cover_xl ?? '',
    name: data.title
  }

  return (
    <MusicContext.Provider value={musicContext}>
      <style.CardResult>
      {open && <Popup data={dataPopup}/>}
        <style.BoxImage className={data.album?.cover_big}>
          <style.BoxImageButton onClick={()=>handleClick(data)}>
            <IconPlay />
          </style.BoxImageButton>
          <style.BoxImageOptions onClick={handlePopup}>
            <IconDots />
  
          </style.BoxImageOptions>
        </style.BoxImage>
        <style.HeadingMusic>{data.title_short}</style.HeadingMusic>
        <style.TextAutor>{data.artist?.name}</style.TextAutor>
                {openModal && <Modal setOpenModal={setOpenModal} />}
      </style.CardResult>

    </MusicContext.Provider>
  )
}

export default CardResult
