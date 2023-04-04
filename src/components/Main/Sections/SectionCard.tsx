import { useContext } from 'react'
import * as style from '../../../styles/main'
import FetchContext from '../../../context/fetchContext'
import CardResult from './CardResult'
import Loader from '../../ui/Loader'

const SectionCard = () => {
  const fetchContext = useContext(FetchContext)
  return (
    <FetchContext.Provider value={fetchContext}>
      <style.SectionResults>
        {fetchContext.root?.tracks.data.map((item, idx) => (
          <CardResult key={idx} data={item} />
        ))}
      </style.SectionResults>

      {!fetchContext.loader && (
        <style.BoxLoader>
          <Loader />
          <style.TextLoader>Cargando. . .</style.TextLoader>
        </style.BoxLoader>
      )}
    </FetchContext.Provider>
  )
}

export default SectionCard
