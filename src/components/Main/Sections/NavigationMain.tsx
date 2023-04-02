import { useEffect, useState } from 'react'
import * as style from '../../../styles/navigation_main'
import IconSearch from '../../icons/IconSearch'
import IconUser from '../../icons/IconUser'

const NavigationMain = () => {
  const [isType, setIsType] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSearchTerm(value);
    setIsType(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const activeElement = document.activeElement as HTMLInputElement;
      if (searchTerm === activeElement.value) {
        setIsType(false);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [searchTerm]);
  return (
    <style.NavigationMainStyle>
      <style.SearchStyles>
        <style.SearchInput placeholder='Buscar. . .' onChange={handleChange}/>
        {isType && <style.SearchResultsBox>fdsa</style.SearchResultsBox>}
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
