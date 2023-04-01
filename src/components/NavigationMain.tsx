import React from 'react'
import * as style from '../styles/navigation_main'
import IconSearch from './icons/IconSearch'
import IconUser from './icons/IconUser'

const NavigationMain = () => {
  return (
    <style.NavigationMainStyle>
      <style.SearchStyles>
        <style.SearchInput placeholder='Buscar. . .' />
        <style.IconField>
          <IconSearch />
        </style.IconField>
      </style.SearchStyles>
      <style.IconProfile>
        <IconUser />
        <style.TextProfile>Harvey V.</style.TextProfile>
      </style.IconProfile>
    </style.NavigationMainStyle>
  )
}

export default NavigationMain
