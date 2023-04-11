import { createContext, useEffect, useState } from 'react'
import { ContextProps } from '../interface/props'
import { RootMusic } from '../interface/context'
import { CONTEXT_MUSIC_INIT } from '../constant/context'
import { Daum, Root } from '../interface/chart'
import { CHART_INIT } from '../constant/chart'

const MusicContext = createContext<RootMusic>(CONTEXT_MUSIC_INIT)

const MusicProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState<RootMusic>(CONTEXT_MUSIC_INIT)
  const [dataMusic, setDataMusic] = useState<Daum | null>(null)
  const [allData, setAllData] = useState(CHART_INIT)
  const [indexMusic, setIndexMusic] = useState(0)
  const [bannerSpecial, setBannerSpecial] = useState(false)
  const handleManager = (value: boolean) =>{
    if (indexMusic < allData.tracks.data.length && indexMusic >= 0) {
      setIndexMusic(value ? indexMusic + 1 : indexMusic - 1)
      const musicIndex = allData.tracks.data[indexMusic]
      setDataMusic(musicIndex)
    }
  }
  const handleAddAllData = (dataRoot: Root) => setAllData(dataRoot)
  const handleMusicNew = (data: Daum) => setDataMusic(data)
  const selectSome = (value: boolean) => setBannerSpecial(value)

  useEffect(() => {
    const generalMusic: RootMusic = {
      currentIndex: indexMusic,
      data: dataMusic,
      handleManager,
      handleMusicNew,
      handleAddAllData,
      allData,
      selectSome,
      bannerSpecial
    }
    setData(generalMusic)
  }, [indexMusic, dataMusic, bannerSpecial])

  return <MusicContext.Provider value={data}>{children}</MusicContext.Provider>
}

export default MusicContext

export { MusicProvider }
