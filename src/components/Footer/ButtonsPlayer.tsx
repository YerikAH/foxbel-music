import { useEffect, useRef, useState } from 'react'
import { DetailsMusicProps } from '../../interface/props'
import * as style from '../../styles/player_music'
import IconNextPlayer from '../icons/IconNextPlayer'
import IconPlay from '../icons/IconPlay'
import IconPause from '../icons/IconPause'
const ButtonsPlayer = ({ data , volume}: DetailsMusicProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null);
  function handleClick (){
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current?.pause();
      console.log(audioRef.current?.volume)
    } else {
      setIsPlaying(true);
      audioRef.current?.play();
    }
  }
  useEffect(() => {
    if(audioRef.current && volume !== undefined){
      audioRef.current.volume = volume / 100
    }
  }, [volume, audioRef])
  
  return (
    <style.PlayerButtons>
      <style.ButtonOption className='back'>
        <IconNextPlayer />
      </style.ButtonOption>
      <style.ButtonPlay onClick={handleClick}>
        {isPlaying ?  <IconPause /> : <IconPlay />}
      </style.ButtonPlay>
      <style.ButtonOption>
        <IconNextPlayer />
      </style.ButtonOption>
      <audio src={data?.preview} autoPlay={isPlaying} ref={audioRef} />
    </style.PlayerButtons>
  )
}

export default ButtonsPlayer
