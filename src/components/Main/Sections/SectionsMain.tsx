import * as style from '../../../styles/main'
import Banner from './Banner'
import NavigationMain from './NavigationMain'
import SectionCard from './SectionCard'
const SectionsMain = () => {
  return (
    <style.SectionBox>
      <NavigationMain />
      <Banner />
      <style.HeadlinePrincipal>Resultados</style.HeadlinePrincipal>
      <SectionCard />
    </style.SectionBox>
  )
}

export default SectionsMain
