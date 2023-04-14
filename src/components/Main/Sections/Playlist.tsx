import ReactDOM from 'react-dom'
import { elementHtmlSelect } from '../../../helpers/helpers'
import * as style from '../../../styles/playlist'
import IconClose from '../../icons/IconClose'
import { PlaylistProps } from '../../../interface/props'
import NotPlaylist from './NotPlaylist'

const Playlist = ({data,setOpenMusic}:PlaylistProps) => {
  const playlistHTML = document.getElementById('playlist')
  return ReactDOM.createPortal(
    <style.PlaylistStyle>
      <style.PlaylistCenter>
      <style.ButtonClose onClick={()=>setOpenMusic(false)}>
          <IconClose />
        </style.ButtonClose>
        <style.PlaylistTitle>{data.name}</style.PlaylistTitle>
        <style.PlaylistAllOptions>

          {data.music.map((item,idx)=>(
          <style.PlaylistOption key={idx}>
            <style.PlaylistImage src={item.image} alt='image' />
            <style.PlaylistInfo>
              <style.PlaylistTitleMusic>{item.name}</style.PlaylistTitleMusic>
              <style.PlaylistAutor>{item.autor}</style.PlaylistAutor>
            </style.PlaylistInfo>
          </style.PlaylistOption>
          ))}


        </style.PlaylistAllOptions>
          {data.music.length === 0 && <NotPlaylist/>}
      </style.PlaylistCenter>
    </style.PlaylistStyle>,
    elementHtmlSelect(playlistHTML, 'playlist'),
  )
}

export default Playlist
