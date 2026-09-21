import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MovieDetailPage } from './pages/MovieDetailPage'
import { WatchlistPage } from './pages/WatchlistPage'
import { WatchlistProvider } from './context/WatchlistContext'
import { Navbar } from './components/Navbar'
import './App.css'

function App() {
  return (
    <WatchlistProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
      </Routes>
    </WatchlistProvider>
  )
}

export default App
