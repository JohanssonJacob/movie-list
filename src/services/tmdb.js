const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

export async function getPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`TMDb request failed: ${response.status}`)
  }

  return response.json()
}

export async function getMovieVideos(id) {
  const response = await fetch(`${BASE_URL}/movie/${id}/videos`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`TMDb request failed: ${response.status}`)
  }

  return response.json()
}

export async function getMovieDetails(id) {
  const response = await fetch(`${BASE_URL}/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`TMDb request failed: ${response.status}`)
  }

  return response.json()
}
