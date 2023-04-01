import { useContext } from 'react'
import * as style from '../../styles/player_music'
import FetchContext from '../context/fetchContext'
import ButtonsPlayer from './ButtonsPlayer'
import DetailsMusic from './DetailsMusic'
import VolumenSettings from './VolumenSettings'

const PlayerMusic = () => {
  const fetchContext = useContext(FetchContext)
  return (
    <FetchContext.Provider value={fetchContext}>
      <style.PlayerMusicStyle>
        <style.MusicStyleContent>
          <DetailsMusic data={fetchContext.root?.tracks.data}/>
          <ButtonsPlayer data={fetchContext.root?.tracks.data}/>
          <VolumenSettings />
        </style.MusicStyleContent>
      </style.PlayerMusicStyle>
    </FetchContext.Provider>
  )
}

export default PlayerMusic
