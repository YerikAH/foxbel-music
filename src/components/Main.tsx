import * as style from '../styles/main'
import Banner from './Banner'
import CardResult from './CardResult'
import NavigationMain from './NavigationMain'
const Main = () => {
  return (
    <style.MainStyle>
      <style.SimulationMenuOption></style.SimulationMenuOption>
      <style.SectionBox>
        <NavigationMain />
        <Banner />
        <style.HeadlinePrincipal>Resultados</style.HeadlinePrincipal>
        <style.SectionResults>
          <CardResult
            autor='Adelete'
            title='My heart break'
            url='https://www.clarin.com/img/2022/02/09/la-britanica-adele-laurie-blue___IzHX7Z2O0_1256x620__1.jpg'
          />
          <CardResult autor='Adelete' title='My heart break' />
          <CardResult autor='Adelete' title='My heart break' />
          <CardResult autor='Adelete' title='My heart break' />
          <CardResult autor='Adelete' title='My heart break' />
          <CardResult autor='Adelete' title='My heart break' />
          <CardResult autor='Adelete' title='My heart break' />
          <CardResult autor='Adelete' title='My heart break' />
          <CardResult autor='Adelete' title='My heart break' />
        </style.SectionResults>
      </style.SectionBox>
    </style.MainStyle>
  )
}

export default Main
