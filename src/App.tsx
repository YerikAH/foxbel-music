import Main from './components/Main/Main'
import MenuOption from './components/Navigation/MenuOption'
import PlayerMusic from './components/Footer/PlayerMusic'
import { FetchProvider } from './context/fetchContext'
import { MusicProvider } from './context/musicContext'

const App = () => {
  return (
    <MusicProvider>
      <FetchProvider>
        <>
          <MenuOption />
          <Main />
          <PlayerMusic />
        </>
      </FetchProvider>
    </MusicProvider>
  )
}
export default App
