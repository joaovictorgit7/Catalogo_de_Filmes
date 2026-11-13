interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="search"
      className="search-bar"
      placeholder="Buscar filme pelo título..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
      autoFocus
    />
  );
}

export default SearchBar;