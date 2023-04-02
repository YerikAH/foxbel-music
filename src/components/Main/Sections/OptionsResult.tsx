import { Daum } from '../../../interface/search'
import * as style from '../../../styles/navigation_main'
interface SearchResult{
    dataItem: Daum
}
const OptionsResult = ({ dataItem }: SearchResult) => {
  return (
    <style.ResultStyle>
      <style.ResultStyleImage src={dataItem.album.cover_big} />
      <style.ResultStyleDetail>
        <style.ResultStyleTitle>{dataItem.title.substring(0,25)}</style.ResultStyleTitle>
        <style.ResultStyleAutor>{dataItem.artist.name}</style.ResultStyleAutor>
      </style.ResultStyleDetail>
    </style.ResultStyle>
  )
}

export default OptionsResult
