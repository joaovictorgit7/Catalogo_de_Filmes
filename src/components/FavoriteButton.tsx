import type { Movie } from "../types/movie";
import { useFavorites } from "../hooks/useFavorites";

interface FavoriteButtonProps {
  movie: Movie;
}

function FavoriteButton({ movie }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  return (
    <button
      type="button"
      className={`favorite-button ${favorite ? "favorite-button--active" : ""}`}
      onClick={() => toggleFavorite(movie)}
      aria-pressed={favorite}
      aria-label={
        favorite
          ? `Remover ${movie.title} dos favoritos`
          : `Adicionar ${movie.title} aos favoritos`
      }
    >
      {favorite ? "❤️" : "🤍"}
    </button>
  );
}

export default FavoriteButton;