import { useContext, useEffect, useState } from 'react'
import * as style from '../../styles/player_music'
import FetchContext from '../../context/fetchContext'
import ButtonsPlayer from './ButtonsPlayer'
import DetailsMusic from './DetailsMusic'
import VolumenSettings from './VolumenSettings'
import MusicContext from '../../context/musicContext'
import { Daum } from '../../interface/chart'

const PlayerMusic = () => {
  const [musicSelect, setMusicSelect] = useState<Daum>()
  const fetchContext = useContext(FetchContext)
  const musicContext = useContext(MusicContext)
  const [volume, setVolume] = useState(50)
  function handleVolume(vol: number){
    setVolume(vol)
  }
  useEffect(() => {
    console.log(musicContext.id)
    const music = fetchContext.root?.tracks.data.find((item) => item.id === musicContext.id)
    setMusicSelect(music)
  }, [musicContext.id])
  return (
    <MusicContext.Provider value={musicContext}>
      <FetchContext.Provider value={fetchContext}>
        {musicContext.id !== 0 && (
          <style.PlayerMusicStyle>
            <style.MusicStyleContent>
              <DetailsMusic data={musicSelect} />
              <ButtonsPlayer data={musicSelect} volume={volume}/>
              <VolumenSettings volume={volume} handleVolume={handleVolume}/>
            </style.MusicStyleContent>
          </style.PlayerMusicStyle>
        )}
      </FetchContext.Provider>
    </MusicContext.Provider>
  )
}

export default PlayerMusic
