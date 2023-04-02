import { useEffect, useState } from 'react'
import * as style from '../../../styles/navigation_main'
import IconSearch from '../../icons/IconSearch'
import IconUser from '../../icons/IconUser'
import { useSearch } from '../../../hook/useSearch'
import { RootSearch } from '../../../interface/search'
import ResultsSearch from './ResultsSearch'

const NavigationMain = () => {
  const [isType, setIsType] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { dataReturn, loading } = useSearch(searchTerm)
  const [data, setData] = useState<RootSearch | null>(null)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setSearchTerm(value)
    setIsType(true)
    setData(dataReturn)
  }
  function handleBlur(){
    // setIsType(!isType)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const activeElement = document.activeElement as HTMLInputElement
      if (searchTerm === activeElement.value) {
        setIsType(false)
      }
    }, 10000)
    return () => clearInterval(interval)
  }, [searchTerm])
  return (
    <style.NavigationMainStyle>
      <style.SearchStyles>
        <style.SearchInput placeholder='Buscar. . .' onChange={handleChange} value={searchTerm} onBlur={handleBlur}/>
        {isType &&  <ResultsSearch data={data} loader={loading}/>}
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
