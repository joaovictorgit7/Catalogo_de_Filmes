import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { Movie } from "../types/movie";
import { searchMovies } from "../services/tmdb";
import { useDebounce } from "../hooks/useDebounce";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import StatusMessage from "../components/StatusMessage";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const debouncedQuery = useDebounce(query.trim(), 500);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(value: string) {
    setQuery(value);
    setSearchParams(value ? { q: value } : {}, { replace: true });
  }

  useEffect(() => {
    if (!debouncedQuery) return;

    let cancelled = false;
    setLoading(true);
    setError(null);

    searchMovies(debouncedQuery)
      .then((data) => {
        if (!cancelled) setMovies(data.results);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [debouncedQuery]);

  function renderResults() {
    if (!debouncedQuery) {
      return <p className="status-message">Digite o nome de um filme para buscar.</p>;
    }
    if (loading) return <StatusMessage type="loading" />;
    if (error) return <StatusMessage type="error" message={error} />;
    if (movies.length === 0) {
      return (
        <p className="status-message">
          Nenhum filme encontrado para "{debouncedQuery}".
        </p>
      );
    }
    return <MovieGrid movies={movies} />;
  }

  return (
    <main>
      <h1>Buscar filmes</h1>
      <SearchBar value={query} onChange={handleChange} />
      {renderResults()}
    </main>
  );
}

export default Search;