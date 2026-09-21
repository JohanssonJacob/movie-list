import { Link } from 'react-router-dom'

export function MovieCard({ movie, page }) {
  const posterUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`

  return (
    <li className="movie-card">
      <Link to={`/movie/${movie.id}`} state={{ page }}>
        <div className="movie-card-poster">
          <img src={posterUrl} alt={movie.title} />
          <span className="movie-card-rating">
            <img src="/star.png" alt="" className="movie-card-rating-icon" />
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
        <p className="movie-card-title">{movie.title}</p>
      </Link>
    </li>
  )
}
