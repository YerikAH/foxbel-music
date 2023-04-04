import { useContext, useEffect, useState } from 'react'
import * as style from '../../styles/player_music'
import FetchContext from '../../context/fetchContext'
import ButtonsPlayer from './ButtonsPlayer'
import DetailsMusic from './DetailsMusic'
import VolumenSettings from './VolumenSettings'
import MusicContext from '../../context/musicContext'
import { Daum } from '../../interface/search'

const PlayerMusic = () => {
  const [musicSelect, setMusicSelect] = useState<Daum | null>(null)
  const fetchContext = useContext(FetchContext)
  const musicContext = useContext(MusicContext)
  const [volume, setVolume] = useState(75)
  function handleVolume(vol: number){
    setVolume(vol)
  }
  useEffect(() => {
    setMusicSelect(musicContext.data)
  }, [musicContext.data])
  return (
    <MusicContext.Provider value={musicContext}>
      <FetchContext.Provider value={fetchContext}>
        {musicContext.data !== null && (
          <style.PlayerMusicStyle>
            <style.MusicStyleContent>
              <DetailsMusic data={musicSelect} />
              <ButtonsPlayer data={musicSelect} volume={volume} handleManager={musicContext.handleManager}/>
              <VolumenSettings volume={volume} handleVolume={handleVolume}/>
            </style.MusicStyleContent>
          </style.PlayerMusicStyle>
        )}
      </FetchContext.Provider>
    </MusicContext.Provider>
  )
}

export default PlayerMusic
