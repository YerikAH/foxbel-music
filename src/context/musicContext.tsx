import { createContext, useEffect, useState } from 'react'
import { ContextProps } from '../interface/props'
import { RootMusic } from '../interface/context'
import { CONTEXT_MUSIC_INIT } from '../constant/context'

const MusicContext = createContext<RootMusic>(CONTEXT_MUSIC_INIT)

const MusicProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState<RootMusic>(CONTEXT_MUSIC_INIT)
  const [indexMusic, setIndexMusic] = useState(0)
  const [musicId, setMusicId] = useState(0)
  const handleNextMusic = () => setIndexMusic(indexMusic + 1)
  const handleBackMusic = () => setIndexMusic(indexMusic - 1)
  const handleNewMusic = (id: number) => setMusicId(id)

  useEffect(() => {
    const generalMusic: RootMusic = {
      currentIndex: indexMusic,
      id: musicId,
      handleNewMusic: handleNewMusic,
      handleBackMusic: handleBackMusic,
      handleNextMusix: handleNextMusic,
    }
    setData(generalMusic)
    console.log(musicId)
  }, [indexMusic, musicId])

  return <MusicContext.Provider value={data}>{children}</MusicContext.Provider>
}

export default MusicContext

export { MusicProvider }
