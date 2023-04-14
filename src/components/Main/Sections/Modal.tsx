import ReactDOM from 'react-dom'
import * as style from '../../../styles/modal'
import IconClose from '../../icons/IconClose'
import { elementHtmlSelect } from '../../../helpers/helpers'
import { InterfacePlaylist, ModalProps } from '../../../interface/interface'
import { useContext, useState } from 'react'
import { PLAYLIST_STORAGE } from '../../../constant/constant'
import LocalStorageContext from '../../../context/localStorageContext'

const Modal = ({setOpenModal}:ModalProps) => {
  const modalHTML = document.getElementById('modal')
  const [input, setInput] = useState('')
  const localStorageContext = useContext(LocalStorageContext)
  
  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const createPlaylist:InterfacePlaylist = {
      name: input,
      music: []
    }
    let data:InterfacePlaylist[] = []
    const playList = localStorage.getItem(PLAYLIST_STORAGE)

    if(playList !== null){
      data = JSON.parse(playList)
      data.push(createPlaylist)
    }else{
      data.push(createPlaylist)
    }
    localStorage.setItem(PLAYLIST_STORAGE,JSON.stringify(data))
    setOpenModal(false)
    localStorageContext.handleLocalStorageChange()
  }
  return ReactDOM.createPortal(
    <style.ModalStyles>
      <style.ModalCenter>
        <style.ButtonClose onClick={()=>setOpenModal(false)}>
          <IconClose />
        </style.ButtonClose>
        <style.TitleModal>Crear Playlist</style.TitleModal>
        <style.DescriptionModal>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt perferendis fugit
          necessitatibus deserunt eius odit possimus sapiente similique soluta fugiat.
        </style.DescriptionModal>
        <style.FormModal>
          <style.InputText placeholder='Nombre playlist' value={input} onChange={(e)=>setInput(e.target.value)} />
          <style.ButtonSubmit onClick={(e)=>handleClick(e)} type='submit'>Crear</style.ButtonSubmit>
        </style.FormModal>
      </style.ModalCenter>
    </style.ModalStyles>,
    elementHtmlSelect(modalHTML, 'modal'),
  )
}

export default Modal
