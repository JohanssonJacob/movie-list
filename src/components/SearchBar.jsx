export function SearchBar({ value, onChange }) {
  return (
    <input
      type="search"
      className="search-bar"
      placeholder="Sök film..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}
