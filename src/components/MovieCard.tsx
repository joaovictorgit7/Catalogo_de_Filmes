import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";
import { IMAGE_BASE_URL } from "../services/tmdb";
import FavoriteButton from "./FavoriteButton";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "—";

    return (
    <div className="movie-card-wrapper">
      <Link to={`/filme/${movie.id}`} className="movie-card-link">
        <article className="movie-card">
          {movie.poster_path ? (
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={`Pôster de ${movie.title}`}
            />
          ) : (
            <div className="movie-card__no-poster">Sem pôster</div>
          )}
          <div className="movie-card__info">
            <h3>{movie.title}</h3>
            <span>
              {year} · ⭐ {movie.vote_average.toFixed(1)}
            </span>
          </div>
        </article>
      </Link>
      <FavoriteButton movie={movie} />
    </div>
  );
}

export default MovieCard;