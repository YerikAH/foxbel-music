import { useContext } from 'react'
import * as style from '../../../styles/main'
import FetchContext from '../../../context/fetchContext'
import CardResult from './CardResult'

const SectionCard = () => {
  const fetchContext = useContext(FetchContext)
  return (
    <FetchContext.Provider value={fetchContext}>
      <style.SectionResults>
        {fetchContext.root?.tracks.data.map((item, idx) => (
          <CardResult key={idx} data={item} />
        ))}
      </style.SectionResults>
    </FetchContext.Provider>
  )
}

export default SectionCard
