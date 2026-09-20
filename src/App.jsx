import { NavLink, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MovieDetailPage } from './pages/MovieDetailPage'
import { FavoritesPage } from './pages/FavoritesPage'
import './App.css'

function App() {
  return (
    <>
      <nav className="navbar">
        <span className="navbar-title">Kvällens film</span>
        <div className="navbar-links">
          <NavLink to="/" end>
            Alla
          </NavLink>
          <NavLink to="/favorites">Min lista</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  )
}

export default App
