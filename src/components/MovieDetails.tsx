import type { MovieDetail } from "../types/movie";
import { IMAGE_BASE_URL } from "../services/tmdb";
import FavoriteButton from "./FavoriteButton";

interface MovieDetailsProps {
  movie: MovieDetail;
}

function MovieDetails({ movie }: MovieDetailsProps) {
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "—";
  const duration = movie.runtime
    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`
    : "Duração não informada";

  return (
    <article className="movie-details">
      {movie.poster_path ? (
        <img
          className="movie-details__poster"
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={`Pôster de ${movie.title}`}
        />
      ) : (
        <div className="movie-card__no-poster movie-details__poster">
          Sem pôster
        </div>
      )}

      <div className="movie-details__info">
        <h1>
          {movie.title} <small>({year})</small>
        </h1>

        <FavoriteButton movie={movie} />

        {movie.tagline && (
          <p className="movie-details__tagline">{movie.tagline}</p>
        )}
        <p>
          ⭐ {movie.vote_average.toFixed(1)} · {duration}
        </p>
        <ul className="movie-details__genres">
          {movie.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <h2>Sinopse</h2>
        <p>{movie.overview || "Sinopse não disponível."}</p>
      </div>
    </article>
  );
}

export default MovieDetails;
