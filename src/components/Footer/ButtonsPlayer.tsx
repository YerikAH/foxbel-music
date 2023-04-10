import { useContext, useEffect, useState } from 'react'
import { DetailsMusicProps } from '../../interface/props'
import * as style from '../../styles/player_music'
import IconNextPlayer from '../icons/IconNextPlayer'
import IconPlay from '../icons/IconPlay'
import IconPause from '../icons/IconPause'
import PlayerContext from '../../context/playerContext'
import MusicContext from '../../context/musicContext'
import { convertMusicTimer } from '../../helpers/helpers'
const ButtonsPlayer = ({ data, volume, handleManager }: DetailsMusicProps) => {
  const playerContext = useContext(PlayerContext)
  const [timerMusic, setTimerMusic] = useState(0)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value)
    setTimerMusic(value)
    if (playerContext.audioRef.current) {
      playerContext.audioRef.current.pause()
      playerContext.audioRef.current.currentTime = value
      playerContext.audioRef.current.play()
    }
  }
  const test = (value: boolean) => handleManager && handleManager(value)
  
  useEffect(() => {
    if (playerContext.audioRef.current && volume !== undefined) {
      playerContext.audioRef.current.volume = volume / 100
    }
  }, [volume, playerContext.audioRef])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = playerContext.audioRef.current?.currentTime ?? 0
      setTimerMusic(currentTime)
    }, 500)

    return () => {
      clearInterval(intervalId)
    }
  }, [timerMusic, data?.preview])

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
        <style.PlayerTimerBox>
          <style.PlayerText>{convertMusicTimer(timerMusic)}</style.PlayerText>
          <style.PlayerTimer
            max={playerContext.audioRef.current?.duration ?? 30}
            min={0}
            value={timerMusic}
            type='range'
            onChange={(e) => handleChange(e)}
          />
          <style.PlayerText className='end'>0:30</style.PlayerText>
        </style.PlayerTimerBox>
      </style.PlayerRepro>
    </PlayerContext.Provider>
  )
}

export default ButtonsPlayer
