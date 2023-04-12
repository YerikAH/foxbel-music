import * as style from '../../styles/menu_option'
import logo from '../../assets/foxbel-music.png'
import { MenuOptions } from '../../interface/interface'
import { changeTrueValue } from '../../helpers/changeTrueValue'
import { useEffect, useState } from 'react'
import { LINK_LIBRARY } from '../../constant/constant'
import { useLocation } from 'react-router-dom'
import {  routeSearchMenu } from '../../helpers/helpers'
const MenuOption = () => {
  const [navData, setNavData] = useState<MenuOptions[]>(LINK_LIBRARY)
  const location = useLocation()

  useEffect(() => {
    const select = routeSearchMenu(location.pathname)
    const newData = changeTrueValue(LINK_LIBRARY, select)
    setNavData(newData)
  }, [location.pathname])
  
  
  return (
    <style.NavigationMenu>
      <style.MenuListLink to='/' tabIndex={1}>
        <style.ImageLogo src={logo} alt='logo' />
      </style.MenuListLink>
      <style.MenuBoxUl>
        <style.MenuUl>
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
          <style.MenuLinkTitle>Playlist</style.MenuLinkTitle>
        </style.MenuUl>
      </style.MenuBoxUl>
    </style.NavigationMenu>
  )
}

export default MenuOption
