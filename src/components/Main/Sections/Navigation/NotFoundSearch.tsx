import * as style from '../../../../styles/navigation_main'
import IconNotSearch from '../../../icons/IconNotSearch'

const NotFoundSearch = () => {
  return (
    <style.NotFoundStyles>
      <IconNotSearch/>
      <style.TextNotFound>Lo sentimos, no encontramos lo que buscabas</style.TextNotFound>
    </style.NotFoundStyles>
  )
}

export default NotFoundSearch