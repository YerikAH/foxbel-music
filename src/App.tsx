import Main from './components/Main/Main'
import MenuOption from './components/Navigation/MenuOption'
import PlayerMusic from './components/Footer/PlayerMusic'
import { FetchProvider } from './context/fetchContext'
import { MusicProvider } from './context/musicContext'
import { PlayerProvider } from './context/playerContext'

const App = () => {
  return (
    <PlayerProvider>
      <MusicProvider>
        <FetchProvider>
          <>
            <MenuOption />
            <Main />
            <PlayerMusic />
          </>
        </FetchProvider>
      </MusicProvider>
    </PlayerProvider>
  )
}
export default App
