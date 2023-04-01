import * as style from '../styles/player_music'
import IconNextPlayer from './icons/IconNextPlayer'
import IconPlay from './icons/IconPlay'
import IconVolume from './icons/IconVolume'

const PlayerMusic = () => {
  return (
    <style.PlayerMusicStyle>
      <style.MusicStyleContent>
        <style.DetailMusic>
          <style.ImageMusic
            src='https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/62/82/a5/6282a515-c95c-9e5e-3eef-4ef7b75639ca/191404113868.png/1200x1200bf-60.jpg'
            alt='music'
          />
          <style.DescriptionMusic>
            <style.TitleMusic>Canción</style.TitleMusic>
            <style.AutorMusic>Artista - Albúm</style.AutorMusic>
          </style.DescriptionMusic>
        </style.DetailMusic>
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
        <style.BoxVolumen>
          <style.SliceVolumen type='range' />
          <style.IconVolumen>
            <IconVolume />
          </style.IconVolumen>
        </style.BoxVolumen>
      </style.MusicStyleContent>
    </style.PlayerMusicStyle>
  )
}

export default PlayerMusic
