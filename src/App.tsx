import Main from './components/Main/Main'
import MenuOption from './components/Navigation/MenuOption'
import PlayerMusic from './components/Footer/PlayerMusic'
import { FetchProvider } from './components/context/fetchContext'

const App = () => {
  return (
    <FetchProvider>
      <>
        <MenuOption />
        <Main />
        <PlayerMusic />
      </>
    </FetchProvider>
  )
}
export default App
