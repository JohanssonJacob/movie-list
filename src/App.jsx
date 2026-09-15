import { Link, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { FavoritesPage } from './pages/FavoritesPage'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Alla</Link>
        <Link to="/favorites">Min lista</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  )
}

export default App
