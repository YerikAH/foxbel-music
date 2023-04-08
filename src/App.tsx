import { FetchProvider } from './context/fetchContext'
import { MusicProvider } from './context/musicContext'
import { PlayerProvider } from './context/playerContext'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import ArtistPage from './components/pages/ArtistPage'
import { PathRoutes } from './enum/enum'
import AlbumPage from './components/pages/AlbumPage'
import PodcastPage from './components/pages/PodcastPage'

const App = () => {
  const location = useLocation()
  return (
    <PlayerProvider>
      <MusicProvider>
        <FetchProvider>
          <>
            <Routes location={location}>
              <Route path={PathRoutes.recent} element={<HomePage />} />
              <Route path={PathRoutes.artist} element={<ArtistPage />} />
              <Route path={PathRoutes.albums} element={<AlbumPage />} />
              <Route path={PathRoutes.podcast} element={<PodcastPage />} />
            </Routes>
          </>
        </FetchProvider>
      </MusicProvider>
    </PlayerProvider>
  )
}
export default App
