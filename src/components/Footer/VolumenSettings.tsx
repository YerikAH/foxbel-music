import { VolumeMusicProps } from '../../interface/props'
import * as style from '../../styles/player_music'
import IconMediumVolume from '../icons/IconMediumVolume'
import IconOffVolume from '../icons/IconOffVolume'
import IconVolume from '../icons/IconVolume'

const VolumenSettings = ({handleVolume, volume}:VolumeMusicProps) => {
  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    const valueNumber = parseInt(e.target.value)
    handleVolume(valueNumber)
  }
  return (
    <style.BoxVolumen>
      <style.SliceVolumen type='range' max={100} min={0} onChange={(e)=>handleChange(e)} value={volume}/>
      <style.IconVolumen>
        {volume > 75 && <IconVolume />}
        {volume === 0 && <IconOffVolume />}
        {volume > 0 && volume < 75 && <IconMediumVolume/>}
      </style.IconVolumen>
    </style.BoxVolumen>
  )
}

export default VolumenSettings
