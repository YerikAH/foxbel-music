import { useContext, useEffect, useState } from 'react'
import { DetailsMusicProps } from '../../interface/props'
import * as style from '../../styles/player_music'
import IconNextPlayer from '../icons/IconNextPlayer'
import IconPlay from '../icons/IconPlay'
import IconPause from '../icons/IconPause'
import PlayerContext from '../../context/playerContext'
import MusicContext from '../../context/musicContext'
const ButtonsPlayer = ({ data, volume, handleManager }: DetailsMusicProps) => {
  const playerContext = useContext(PlayerContext)
  const musicContext = useContext(MusicContext)
  const [timerMusic, setTimerMusic] = useState(0)
  useEffect(() => {
    if (playerContext.audioRef.current && volume !== undefined) {
      playerContext.audioRef.current.volume = volume / 100
    }
  }, [volume, playerContext.audioRef])
  function test(value: boolean) {
    handleManager && handleManager(value)
    console.log(musicContext.currentIndex)
  }

  useEffect(() => {
    console.log(playerContext.audioRef.current?.duration)
    console.log(playerContext.audioRef.current?.currentTime)
    setTimerMusic(playerContext.audioRef.current?.currentTime ?? 0)
  }, [playerContext.audioRef.current?.currentTime])
  
  return (
    <PlayerContext.Provider value={playerContext}>
      <style.PlayerRepro>
        <style.PlayerButtons>
          <style.ButtonOption className='back' onClick={() => test(false)}>
            <IconNextPlayer />
          </style.ButtonOption>
          <style.ButtonPlay onClick={() => playerContext.handleClick()}>
            {playerContext.isPlaying ? <IconPause /> : <IconPlay />}
          </style.ButtonPlay>
          <style.ButtonOption onClick={() => test(true)}>
            <IconNextPlayer />
          </style.ButtonOption>
          <audio
            src={data?.preview}
            autoPlay={playerContext.isPlaying}
            ref={playerContext.audioRef}
          />
        </style.PlayerButtons>
        <style.PlayerTimer max={playerContext.audioRef.current?.duration ?? 30} min={0} value={timerMusic} type='range'/>
      </style.PlayerRepro>
    </PlayerContext.Provider>
  )
}

export default ButtonsPlayer
