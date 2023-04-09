import { CardPodcastProps } from '../../../interface/props'
import * as style from '../../../styles/card'
const CardPodcast = ({ data }: CardPodcastProps) => {
  return (
    <style.CardResult>
      <style.BoxImageAtrr src={data.picture_xl} alt='artist' />
      <style.HeadingAutor>{data.title}</style.HeadingAutor>
      <style.TexDescription>{data.description.substring(0, 50)}...</style.TexDescription>
    </style.CardResult>
  )
}

export default CardPodcast
