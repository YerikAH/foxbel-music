import * as style from '../../styles/player_music'
import IconNextPlayer from '../icons/IconNextPlayer'
import IconPlay from '../icons/IconPlay'
const ButtonsPlayer = () => {
  return (
    <style.PlayerButtons>
      <style.ButtonOption className='back'>
        <IconNextPlayer />
      </style.ButtonOption>
      <style.ButtonPlay>
        <IconPlay />
      </style.ButtonPlay>
      <style.ButtonOption>
        <IconNextPlayer />
      </style.ButtonOption>
    </style.PlayerButtons>
  )
}

export default ButtonsPlayer
