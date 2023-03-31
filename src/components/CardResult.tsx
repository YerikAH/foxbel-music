import { CardResultProps } from '../interface/props'
import * as style from '../styles/card_result'
import IconDots from './icons/IconDots'
import IconPlay from './icons/IconPlay'

const CardResult = ({ autor, title, url}:CardResultProps) => {
  return (
    <style.CardResult>
        <style.BoxImage className={url}>
            <style.BoxImageButton>
                <IconPlay/>
            </style.BoxImageButton>
            <style.BoxImageOptions>
                <IconDots/>
            </style.BoxImageOptions>
        </style.BoxImage>
        <style.HeadingMusic>{title}</style.HeadingMusic>
        <style.TextAutor>{autor}</style.TextAutor>
    </style.CardResult> 
  )
}

export default CardResult