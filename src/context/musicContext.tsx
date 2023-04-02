import { createContext, useEffect, useState } from 'react'
import { ContextProps } from '../interface/props'
import { RootMusic } from '../interface/context'
import { CONTEXT_MUSIC_INIT } from '../constant/context'
import { Daum } from '../interface/chart'

const MusicContext = createContext<RootMusic>(CONTEXT_MUSIC_INIT)

const MusicProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState<RootMusic>(CONTEXT_MUSIC_INIT)
  const [indexMusic, setIndexMusic] = useState(0)
  const [dataMusic, setDataMusic] = useState<Daum | null>(null)
  const handleNextMusic = () => setIndexMusic(indexMusic + 1)
  const handleBackMusic = () => setIndexMusic(indexMusic - 1)
  const handleMusicNew = (data: Daum) => setDataMusic(data)

  useEffect(() => {
    const generalMusic: RootMusic = {
      currentIndex: indexMusic,
      data: dataMusic,
      handleBackMusic: handleBackMusic,
      handleNextMusix: handleNextMusic,
      handleMusicNew: handleMusicNew
    }
    setData(generalMusic)

  }, [indexMusic, dataMusic])

  return <MusicContext.Provider value={data}>{children}</MusicContext.Provider>
}

export default MusicContext

export { MusicProvider }
