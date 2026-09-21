import { Link, NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">
        Kvällens film
      </Link>
      <div className="navbar-links">
        <NavLink to="/" end>
          Alla
        </NavLink>
        <NavLink to="/watchlist">
          Min lista
        </NavLink>
      </div>
    </nav>
  )
}
