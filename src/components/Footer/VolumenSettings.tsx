import { VolumeMusicProps } from '../../interface/props'
import * as style from '../../styles/player_music'
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
        <IconVolume />
      </style.IconVolumen>
    </style.BoxVolumen>
  )
}

export default VolumenSettings
