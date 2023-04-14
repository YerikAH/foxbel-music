import * as style from '../../styles/menu_option'
import logo from '../../assets/foxbel-music.png'
import { InterfacePlaylist, MenuOptions, MenuStyles } from '../../interface/interface'
import { changeTrueValue } from '../../helpers/changeTrueValue'
import { useContext, useEffect, useState } from 'react'
import { LINK_LIBRARY, PLAYLIST_STORAGE, STYLE_MENU, VARIABLE } from '../../constant/constant'
import { useLocation } from 'react-router-dom'
import { routeSearchMenu } from '../../helpers/helpers'
import IconPlus from '../icons/IconPlus'
import IconHam from '../icons/IconHam'
import IconClose from '../icons/IconClose'
import Modal from '../Main/Sections/Modal'
import Playlist from '../Main/Sections/Playlist'
import LocalStorageContext from '../../context/localStorageContext'
import IconTrash from '../icons/IconTrash'
const MenuOption = () => {
  const [navData, setNavData] = useState<MenuOptions[]>(LINK_LIBRARY)
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [styleOpen, setStyleOpen] = useState<MenuStyles>(STYLE_MENU)
  const [playList, setPlayList] = useState<InterfacePlaylist[]>([])
  const [openMusic, setOpenMusic] = useState(false)
  const handleClick = () => setOpen(!open)
  const [dataFilter, setDataFilter] = useState<InterfacePlaylist>(VARIABLE)
  const localStorageContext = useContext(LocalStorageContext)

  const handleFilter = (name: string) => {
    const match: InterfacePlaylist | undefined = playList.find((item) => item.name === name)
    if (match !== undefined) {
      setDataFilter(match)
    }
    setOpenMusic(true)
  }

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
    console.log(localStorage.getItem(PLAYLIST_STORAGE))
    const playList = localStorage.getItem(PLAYLIST_STORAGE)
    if (playList !== null) {
      const data: InterfacePlaylist[] = JSON.parse(playList)
      setPlayList(data)
    }
  }, [localStorageContext.localStorageValue])

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
              <style.ListPlaylist key={idx} tabIndex={1} onClick={() => handleFilter(item.name)}>
                <style.ListPlaylistText>{item.name}</style.ListPlaylistText>
                <style.ListPlaylistRemove>
                  <IconTrash />
                </style.ListPlaylistRemove>
              </style.ListPlaylist>
            ))}
            <style.MenuListButton onClick={() => setOpenModal(!open)}>
              <IconPlus />
              Crear playlist
            </style.MenuListButton>
          </style.MenuUl>
        </style.MenuBoxUl>
        {openModal && <Modal setOpenModal={setOpenModal} />}
        {openMusic && <Playlist setOpenMusic={setOpenMusic} data={dataFilter} />}
      </style.NavigationMenu>
    </>
  )
}

export default MenuOption
