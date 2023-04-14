import { createContext, useEffect, useState } from 'react'
import { ContextProps } from '../interface/props'
import { PLAYLIST_STORAGE } from '../constant/constant'
import { LOCALSTORAGE_CONTEXT } from '../constant/context'
import { LocalStorageContextInterface } from '../interface/context'

const LocalStorageContext = createContext<LocalStorageContextInterface>(LOCALSTORAGE_CONTEXT)

const LocalStorageProvider = ({ children }: ContextProps) => {
  const [localStorageValue, setLocalStorageValue] = useState(localStorage.getItem(PLAYLIST_STORAGE))
  const [dataReturn, setDataReturn] = useState<LocalStorageContextInterface>({
    localStorageValue,
    setLocalStorageValue,
    handleLocalStorageChange
  })
  function handleLocalStorageChange () {
    setLocalStorageValue(localStorage.getItem(PLAYLIST_STORAGE))
  }

  useEffect(() => {
    setDataReturn({
      localStorageValue,
      setLocalStorageValue,
      handleLocalStorageChange,
    })
  }, [localStorageValue])

  return <LocalStorageContext.Provider value={dataReturn}>{children}</LocalStorageContext.Provider>
}

export default LocalStorageContext

export { LocalStorageProvider }
