import * as style from '../../styles/player_music'
import IconVolume from '../icons/IconVolume'

const VolumenSettings = () => {
  return (
    <style.BoxVolumen>
      <style.SliceVolumen type='range' />
      <style.IconVolumen>
        <IconVolume />
      </style.IconVolumen>
    </style.BoxVolumen>
  )
}

export default VolumenSettings
