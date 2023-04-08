import { CardAlbumProps } from '../../../interface/props'
import * as style from '../../../styles/card_artist'
const CardAlbum = ({ data }: CardAlbumProps) => {
  return (
    <style.CardResult>
      <style.BoxImage src={data.cover_xl} alt='artist' />
      <style.HeadingAutor>{data.title}</style.HeadingAutor>
      <style.TextAutor>{data.artist.name}</style.TextAutor>
    </style.CardResult>
  )
}

export default CardAlbum
