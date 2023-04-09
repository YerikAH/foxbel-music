import { CardArtistProps } from '../../../interface/props'
import * as style from '../../../styles/card'

const CardArtist = ({ data }: CardArtistProps) => {
  return (
    <style.CardResult>
      <style.ButtonLink href={data.link} tabIndex={1} target='_blank'></style.ButtonLink>
      <style.BoxImageAtrr src={data.picture_xl} alt='artist' />
      <style.HeadingAutor>{data.name}</style.HeadingAutor>
    </style.CardResult>
  )
}

export default CardArtist
