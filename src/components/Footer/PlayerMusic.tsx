import * as style from '../../styles/player_music'
import ButtonsPlayer from './ButtonsPlayer'
import DetailsMusic from './DetailsMusic'
import VolumenSettings from './VolumenSettings'

const PlayerMusic = () => {
  return (
    <style.PlayerMusicStyle>
      <style.MusicStyleContent>
        <DetailsMusic />
        <ButtonsPlayer />
        <VolumenSettings />
      </style.MusicStyleContent>
    </style.PlayerMusicStyle>
  )
}

export default PlayerMusic
