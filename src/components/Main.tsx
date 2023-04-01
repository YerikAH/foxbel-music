import { useEffect, useState } from 'react'
import * as style from '../styles/main'
import Banner from './Banner'
import CardResult from './CardResult'
import NavigationMain from './NavigationMain'
import { SEARCH_CONST } from './constant/constant'
import { useFetch } from '../hook/useFetch'
import { Root } from '../interface/search'

const Main = () => {
  const [data, setData] = useState<unknown>()
  const { dataJson, load } = useFetch()

  useEffect(() => {
    if (dataJson !== null) {
      setData(dataJson)
      console.log(dataJson)
    }
  }, [load])
  return (
    <style.MainStyle>
      <style.SimulationMenuOption></style.SimulationMenuOption>
      <style.SectionBox>
        <NavigationMain />
        <Banner />
        <style.HeadlinePrincipal>Resultados</style.HeadlinePrincipal>
        <style.SectionResults>
          {/* {data.data.map((item) => (
            <CardResult
              autor={item.artist.name}
              title={item.title}
              key={item.id}
              url={item.album.cover}
            />
          ))} */}
        </style.SectionResults>
      </style.SectionBox>
    </style.MainStyle>
  )
}

export default Main
