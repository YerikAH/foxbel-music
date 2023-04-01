import { DetailsMusicProps } from '../../interface/props'
import * as style from '../../styles/player_music'
import placeImage from '../../assets/foxbel-music-white-icon@2x.png'
const DetailsMusic = ({ data }: DetailsMusicProps) => {
  const {artist, title, album} = data || {}
  return (
    <style.DetailMusic>
      <style.ImageMusic
        src={album?.cover_big ?? placeImage}
        alt='music'
      />
      <style.DescriptionMusic>
        <style.TitleMusic>{title ?? 'Error'}</style.TitleMusic>
        <style.AutorMusic>{artist?.name ?? 'Error'}</style.AutorMusic>
      </style.DescriptionMusic>
    </style.DetailMusic>
  )
}

export default DetailsMusic
