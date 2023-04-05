import { useContext } from 'react'
import * as style from '../../../styles/main'
import FetchContext from '../../../context/fetchContext'
import CardResult from './CardResult'
import Loader from '../../ui/Loader'
import { PathRoutes } from '../../../enum/enum'
import { useLocation } from 'react-router-dom'

const SectionCard = () => {
  const location = useLocation()
  const fetchContext = useContext(FetchContext)
  return (
    <FetchContext.Provider value={fetchContext}>
      <style.SectionResults>
        {location.pathname === PathRoutes.recent &&
          fetchContext.root?.tracks.data.map((item, idx) => <CardResult key={idx} data={item} />)}
        {location.pathname === PathRoutes.artist &&
          fetchContext.root?.artists.data.map((item, idx) => <p key={idx}>{item.name}</p>)}
      </style.SectionResults>

      {fetchContext.loader && (
        <style.BoxLoader>
          <Loader />
          <style.TextLoader>Cargando. . .</style.TextLoader>
        </style.BoxLoader>
      )}
    </FetchContext.Provider>
  )
}

export default SectionCard
