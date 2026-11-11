import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import { getPopularMovies } from "../services/tmdb";
import MovieGrid from "../components/MovieGrid";
import StatusMessage from "../components/StatusMessage";

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPopularMovies()
      .then((data) => setMovies(data.results))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <StatusMessage type="loading" />;
  if (error) return <StatusMessage type="error" message={error} />;

  return (
    <main>
      <h1>Filmes populares</h1>
      <MovieGrid movies={movies} />
    </main>
  );
}

export default Home;