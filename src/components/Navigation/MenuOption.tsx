import * as style from '../../styles/menu_option'
import logo from '../../assets/foxbel-music.png'
import { MenuOptions } from '../../interface/interface'
import { AllOptions } from '../../enum/enum'
import { changeTrueValue } from '../../helpers/changeTrueValue'
import { useState } from 'react'
import { LINK_LIBRARY } from '../../constant/constant'
const MenuOption = () => {
  const [navData, setNavData] = useState<MenuOptions[]>(LINK_LIBRARY)
  function handleLink(select: AllOptions) {
    const newData = changeTrueValue(LINK_LIBRARY, select)
    setNavData(newData)
  }
  return (
    <style.NavigationMenu>
      <style.MenuListLink to='/' tabIndex={1}>
        <style.ImageLogo src={logo} alt='logo' />
      </style.MenuListLink>
      <style.MenuBoxUl>
        <style.MenuUl>
          <style.MenuLinkTitle>Mi Librería</style.MenuLinkTitle>
          {navData.map((item, idx) => (
            <style.MenuList key={idx} onClick={() => handleLink(item.name)}>
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
