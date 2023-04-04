import * as style from '../../styles/menu_option'
import logo from '../../assets/foxbel-music.png'
import { MenuOptions } from '../../interface/interface'
import { AllOptions, PathRoutes } from '../../enum/enum'
import { changeTrueValue } from '../../helpers/changeTrueValue'
import { useState } from 'react'
const MenuOption = () => {
  const linkLibrary: MenuOptions[] = [
    {
      name: AllOptions.recent,
      value: true,
      path: PathRoutes.recent
    },
    {
      name: AllOptions.artist,
      value: false,
      path: PathRoutes.artist
    },
    {
      name: AllOptions.albums,
      value: false,
      path: PathRoutes.albums
    },
    {
      name: AllOptions.podcast,
      value: false,
      path: PathRoutes.podcast
    },
  ]
  const [navData, setNavData] = useState<MenuOptions[]>(linkLibrary)
  function handleLink(select: AllOptions) {
    const newData = changeTrueValue(linkLibrary, select)
    setNavData(newData)
    console.log('Yep')
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
            <style.MenuList key={idx}>
              <style.MenuListLink
                className={`${item.value}`}
                tabIndex={1}
                to={item.path}
                onClick={() => handleLink(item.name)}
              >
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
