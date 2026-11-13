import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { MovieDetail } from "../types/movie";
import { getMovieDetails } from "../services/tmdb";
import MovieDetails from "../components/MovieDetails";
import StatusMessage from "../components/StatusMessage";

function Details() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getMovieDetails(Number(id))
      .then((data) => setMovie(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <StatusMessage type="loading" />;
  if (error || !movie) {
    return (
      <StatusMessage type="error" message={error ?? "Filme não encontrado."} />
    );
  }

  return (
    <main>
      <button className="back-link" onClick={() => navigate(-1)}>
        ← Voltar
      </button>
      <MovieDetails movie={movie} />
    </main>
  );
}

export default Details;
