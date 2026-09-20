import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails, getMovieVideos } from '../services/tmdb'

export function MovieDetailPage() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    async function loadMovie() {
      const data = await getMovieDetails(id)
      setMovie(data)
    }

    loadMovie()
  }, [id])

  async function handleShowTrailer() {
    const data = await getMovieVideos(id)
    const trailer = data.results.find(
      (video) => video.type === 'Trailer' && video.official && video.site === 'YouTube',
    )

    if (trailer) {
      window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank')
    }
  }

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
      <button type="button" onClick={handleShowTrailer}>
        Visa trailer
      </button>
      <button type="button" onClick={() => setIsSaved(!isSaved)}>
        {isSaved ? 'Tillagd i listan' : 'Lägg till i lista'}
      </button>
    </div>
  )
}
