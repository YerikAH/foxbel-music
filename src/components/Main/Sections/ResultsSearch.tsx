import { SearchProps } from '../../../interface/props'
import * as style from '../../../styles/navigation_main'
import NotFoundSearch from './NotFoundSearch'
import OptionsResult from './OptionsResult'

const ResultsSearch = ({ data }: SearchProps) => {
  return (
    <style.SearchResultsBox>
      {data?.total == 0 ? (
        <NotFoundSearch />
      ) : data?.data === undefined ? (
        <NotFoundSearch />
      ) : (
        data?.data.map((item) => <OptionsResult key={item.id} dataItem={item} />)
      )}
    </style.SearchResultsBox>
  )
}

export default ResultsSearch
