import { NavLink, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MovieDetailPage } from './pages/MovieDetailPage'
import { WatchlistPage } from './pages/WatchlistPage'
import { WatchlistProvider } from './context/WatchlistContext'
import './App.css'

function App() {
  return (
    <WatchlistProvider>
      <nav className="navbar">
        <span className="navbar-title">Kvällens film</span>
        <div className="navbar-links">
          <NavLink to="/" end>
            Alla
          </NavLink>
          <NavLink to="/watchlist">Min lista</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
      </Routes>
    </WatchlistProvider>
  )
}

export default App
