import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails } from '../services/tmdb'
import { TrailerButton } from '../components/TrailerButton'
import { WatchlistButton } from '../components/WatchlistButton'

export function MovieDetailPage() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    async function loadMovie() {
      const data = await getMovieDetails(id)
      setMovie(data)
    }

    loadMovie()
  }, [id])

  if (!movie) {
    return null
  }

  const posterUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  const year = movie.release_date.slice(0, 4)
  const genreNames = movie.genres.map((genre) => genre.name)

  return (
    <div>
      <img src={posterUrl} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{year}</p>
      <p>{genreNames.join(', ')}</p>
      <p>{movie.overview}</p>
      <TrailerButton movieId={movie.id} />
      <WatchlistButton movie={movie} />
    </div>
  )
}
