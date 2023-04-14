import { useContext } from 'react'
import MusicContext from '../../../../context/musicContext'
import { Daum } from '../../../../interface/search'
import * as style from '../../../../styles/navigation_main'
interface SearchResult {
  dataItem: Daum
}
const OptionsResult = ({ dataItem }: SearchResult) => {
  const musicContext = useContext(MusicContext)
  const handleClick =(data: Daum)=>{
    musicContext.handleMusicNew(data)
    musicContext.selectSome(false)
  }
  return (
    <MusicContext.Provider value={musicContext}>
      <style.ResultStyle onClick={()=>handleClick(dataItem)}>
        <style.ResultStyleImage src={dataItem.album.cover_big} />
        <style.ResultStyleDetail>
          <style.ResultStyleTitle>{dataItem.title.substring(0, 25)}</style.ResultStyleTitle>
          <style.ResultStyleAutor>{dataItem.artist.name}</style.ResultStyleAutor>
        </style.ResultStyleDetail>
      </style.ResultStyle>
    </MusicContext.Provider>
  )
}

export default OptionsResult
