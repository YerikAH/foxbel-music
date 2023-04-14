import { useContext } from 'react'
import LocalStorageContext from '../../../../context/localStorageContext'
import { InterfacePlaylist, WarningProps } from '../../../../interface/interface'
import * as style from '../../../../styles/modal_warning'
import IconClose from '../../../icons/IconClose'
import { PLAYLIST_STORAGE } from '../../../../constant/constant'

const ModalWarning = ({ setWarning, playList, name }: WarningProps) => {
  const localStorageContext = useContext(LocalStorageContext)

  const handleRemove = (name: string, playList: InterfacePlaylist[]) => {
    const match: InterfacePlaylist[] | undefined = playList.filter((item) => item.name !== name)
    localStorage.setItem(PLAYLIST_STORAGE, JSON.stringify(match))
    localStorageContext.setLocalStorageValue(JSON.stringify(match))
    localStorageContext.handleLocalStorageChange()
    setWarning(false)
  }

  return (
    <style.ModalWarningWindonw>
      <style.ModalWarningStyles>
        <style.ButtonClose onClick={()=> setWarning(false)}>
          <IconClose />
        </style.ButtonClose>
        <style.ModalWarningTitle>Advertencia</style.ModalWarningTitle>
        <style.ModalWarningText>
        ¡Advertencia! Eliminar una playlist borrará permanentemente todas las canciones y configuraciones asociadas. ¿Estás seguro de que quieres eliminar esta playlist?
        </style.ModalWarningText>
        <style.ModalWarningBoxButton>
          <style.ModalWarningBotton className='stroke' onClick={()=> setWarning(false)}>No eliminar</style.ModalWarningBotton>
          <style.ModalWarningBotton onClick={()=> handleRemove(name, playList)}>Sí, eliminar</style.ModalWarningBotton>
        </style.ModalWarningBoxButton>
      </style.ModalWarningStyles>
    </style.ModalWarningWindonw>
  )
}

export default ModalWarning
