import { CardPodcastProps } from '../../../interface/props'
import * as style from '../../../styles/card'
const CardPodcast = ({ data }: CardPodcastProps) => {
  return (
    <style.CardResult>
      <style.BoxImageLink href={data.link} target='_blank' tabIndex={1}></style.BoxImageLink>
      <style.BoxImageAtrr src={data.picture_xl} alt='artist' />
      <style.HeadingAutor>{data.title}</style.HeadingAutor>
      <style.TexDescription>{data.description.substring(0, 50)}...</style.TexDescription>
    </style.CardResult>
  )
}

export default CardPodcast
