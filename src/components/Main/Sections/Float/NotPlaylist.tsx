import * as style from '../../../../styles/playlist'
import IconNotSearch from '../../../icons/IconNotSearch'

const NotPlaylist = () => {
  return (
    <style.NotPlaylistStyle>
       <IconNotSearch/>
      <style.NotPlaylistText>¡Vaya! Parece que esta playlist está vacía. Añade tus canciones favoritas para comenzar a disfrutar de la música que más te gusta.</style.NotPlaylistText>
    </style.NotPlaylistStyle>
  )
}

export default NotPlaylist