import { useState } from 'react'
import { useWatchlist } from '../hooks/useWatchlist'

export function WatchlistButton({ movie }) {
  const { watchlist, setWatchlist } = useWatchlist()
  const [isAdding, setIsAdding] = useState(false)
  const [hypeLevel, setHypeLevel] = useState('')
  const [note, setNote] = useState('')
  const [error, setError] = useState('')

  const isInWatchlist = watchlist.some((item) => item.id === movie.id)

  function handleRemove() {
    setWatchlist(watchlist.filter((item) => item.id !== movie.id))
  }

  function handleCancel() {
    setIsAdding(false)
    setHypeLevel('')
    setNote('')
    setError('')
  }

  function handleHypeLevelChange(event) {
    setHypeLevel(event.target.value)
  }

  function handleNoteChange(event) {
    setNote(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (hypeLevel === '') {
      setError('Välj en hypenivå innan du sparar.')
      return
    }

    setWatchlist([
      ...watchlist,
      {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        hypeLevel,
        note,
      },
    ])

    handleCancel()
  }

  if (isInWatchlist) {
    return (
      <button type="button" onClick={handleRemove}>
        Tillagd i listan
      </button>
    )
  }

  if (isAdding) {
    return (
      <form className="watchlist-form" onSubmit={handleSubmit}>
        <label>
          Hypenivå
          <select value={hypeLevel} onChange={handleHypeLevelChange}>
            <option value="">Välj...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>

        <label>
          Anteckning
          <input type="text" value={note} onChange={handleNoteChange} />
        </label>

        {error && <p className="form-error">{error}</p>}

        <div className="watchlist-form-actions">
          <button type="submit">Spara</button>
          <button type="button" onClick={handleCancel}>
            Avbryt
          </button>
        </div>
      </form>
    )
  }

  return (
    <button type="button" onClick={() => setIsAdding(true)}>
      Lägg till i lista
    </button>
  )
}
