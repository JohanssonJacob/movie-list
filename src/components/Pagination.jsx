export function Pagination({ page, onPageChange, totalPages }) {
  const hasPrevious = page > 1
  const hasNext = totalPages === undefined || page < totalPages

  return (
    <div className="pagination">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => onPageChange(page - 1)}
        disabled={!hasPrevious}
      >
        Föregående
      </button>
      <span className="pagination-page">Sida {page}</span>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => onPageChange(page + 1)}
        disabled={!hasNext}
      >
        Nästa
      </button>
    </div>
  )
}
