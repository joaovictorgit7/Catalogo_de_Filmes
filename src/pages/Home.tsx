import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import { getPopularMovies } from "../services/tmdb";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";
import StatusMessage from "../components/StatusMessage";

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getPopularMovies(page)
      .then((data) => {
        setMovies(data.results);
        setTotalPages(Math.min(data.total_pages, 500));
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page]);

  function handlePageChange(newPage: number) {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (loading) return <StatusMessage type="loading" />;
  if (error) return <StatusMessage type="error" message={error} />;

  return (
    <main>
      <h1>Filmes populares</h1>
      <MovieGrid movies={movies} />
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
}

export default Home;