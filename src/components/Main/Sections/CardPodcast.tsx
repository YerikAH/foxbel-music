import { CardPodcastProps } from '../../../interface/props'
import * as style from '../../../styles/card_artist'
const CardPodcast = ({ data }: CardPodcastProps) => {
  return (
    <style.CardResult>
      <style.BoxImage src={data.picture_xl} alt='artist' />
      <style.HeadingAutor>{data.title}</style.HeadingAutor>
      <style.TexDescription>{data.description.substring(0, 50)}...</style.TexDescription>
    </style.CardResult>
  )
}

export default CardPodcast
