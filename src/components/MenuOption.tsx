import * as style from '../styles/menu_option'
import logo from '../assets/foxbel-music.png'
const MenuOption = () => {
  const linkLibrary = [
    {
      name: 'Recientes',
      value: true,
    },
    {
      name: 'Artistas',
      value: false,
    },
    {
      name: 'Álbums',
      value: false,
    },
    {
      name: 'Canciones',
      value: false,
    },
    {
      name: 'Estaciones',
      value: false,
    },
  ]
  return (
    <style.NavigationMenu>
      <style.MenuListLink href='#' tabIndex={1}>
        <style.ImageLogo src={logo} alt='logo' />
      </style.MenuListLink>
      <style.MenuBoxUl>
          <style.MenuUl>
            <style.MenuLinkTitle>Mi Librería</style.MenuLinkTitle>
            {linkLibrary.map((item, idx) => (
              <style.MenuList key={idx}>
                <style.MenuListLink className={`${item.value}`} tabIndex={1}>{item.name}</style.MenuListLink>
              </style.MenuList>
            ))}
          </style.MenuUl>
          <style.MenuUl>
            <style.MenuLinkTitle>Mi Librería</style.MenuLinkTitle>
          </style.MenuUl>
        </style.MenuBoxUl>
    </style.NavigationMenu>
  )
}

export default MenuOption
