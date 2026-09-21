import { Link } from 'react-router-dom'

export function MovieCard({ movie, page, hypeLevel, note, backTo = '/' }) {
  const posterUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`

  return (
    <li className="movie-card">
      <Link to={`/movie/${movie.id}`} state={{ page, backTo }}>
        <div className="movie-card-poster">
          <img src={posterUrl} alt={movie.title} />
          <div className="movie-card-badges">
            <span className="movie-card-badge">
              <img src="/star.png" alt="" className="movie-card-badge-icon" />
              {movie.vote_average.toFixed(1)}
            </span>
            {hypeLevel && (
              <span className="movie-card-badge">
                <img src="/fire.png" alt="" className="movie-card-badge-icon" />
                {hypeLevel}/5
              </span>
            )}
          </div>
        </div>
        <p className="movie-card-title">{movie.title}</p>
      </Link>

      {note && <p className="movie-card-note">{note}</p>}
    </li>
  )
}
