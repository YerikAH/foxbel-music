import * as style from '../../styles/menu_option'
import logo from '../../assets/foxbel-music.png'
import { InterfacePlaylist, MenuOptions, MenuStyles } from '../../interface/interface'
import { changeTrueValue } from '../../helpers/changeTrueValue'
import { useEffect, useState } from 'react'
import { LINK_LIBRARY, PLAYLIST_STORAGE, STYLE_MENU } from '../../constant/constant'
import { useLocation } from 'react-router-dom'
import { routeSearchMenu } from '../../helpers/helpers'
import IconPlus from '../icons/IconPlus'
import IconHam from '../icons/IconHam'
import IconClose from '../icons/IconClose'
import Modal from '../Main/Sections/Modal'
const MenuOption = () => {
  const [navData, setNavData] = useState<MenuOptions[]>(LINK_LIBRARY)
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [styleOpen, setStyleOpen] = useState<MenuStyles>(STYLE_MENU)
  const [playList, setPlayList] = useState<InterfacePlaylist[]>([])

  const handleClick = () => setOpen(!open)

  useEffect(() => {
    const select = routeSearchMenu(location.pathname)
    const newData = changeTrueValue(LINK_LIBRARY, select)
    setNavData(newData)
  }, [location.pathname])

  useEffect(() => {
    if (open) setStyleOpen({ left: '0' })
    else {
      setStyleOpen({ left: '-100vw' })
    }
  }, [open])

  useEffect(() => {
    const playList = localStorage.getItem(PLAYLIST_STORAGE)
    if (playList !== null) {
      const data: InterfacePlaylist[] = JSON.parse(playList)
      setPlayList(data)
    }
  }, [localStorage.getItem(PLAYLIST_STORAGE)])

  return (
    <>
      <style.NavigationHam onClick={handleClick}>
        {!open ? <IconHam /> : <IconClose />}
      </style.NavigationHam>
      <style.NavigationMenu style={styleOpen}>
        <style.MenuListLink to='/' tabIndex={1}>
          <style.ImageLogo src={logo} alt='logo' />
        </style.MenuListLink>
        <style.MenuBoxUl>
          <style.MenuUl className='separate'>
            <style.MenuLinkTitle>Mi Librería</style.MenuLinkTitle>
            {navData.map((item, idx) => (
              <style.MenuList key={idx}>
                <style.MenuListLink className={`${item.value}`} tabIndex={1} to={item.path}>
                  {item.name}
                </style.MenuListLink>
              </style.MenuList>
            ))}
          </style.MenuUl>
          <style.MenuUl>
            <style.MenuLinkTitle className='bottom'>Playlist</style.MenuLinkTitle>
            {playList.map((item, idx) => (
              <style.ListPlaylist key={idx} tabIndex={1}>
                {item.name}
              </style.ListPlaylist>
            ))}
            <style.MenuListButton onClick={() => setOpenModal(!open)}>
              <IconPlus />
              Crear playlist
            </style.MenuListButton>
          </style.MenuUl>
        </style.MenuBoxUl>
        {openModal && <Modal setOpenModal={setOpenModal} />}
      </style.NavigationMenu>
    </>
  )
}

export default MenuOption
