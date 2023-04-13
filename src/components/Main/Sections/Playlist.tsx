import ReactDOM from 'react-dom'
import { elementHtmlSelect } from '../../../helpers/helpers'

const Playlist = () => {
  const playlistHTML = document.getElementById('playlist')
  return ReactDOM.createPortal(<div>Playlist</div>, elementHtmlSelect(playlistHTML, 'playlist'))
}

export default Playlist
