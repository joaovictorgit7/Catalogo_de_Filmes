import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";
import MovieGrid from "../components/MovieGrid";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <main>
      <h1>Meus favoritos</h1>
      {favorites.length === 0 ? (
        <p className="status-message">
          Você ainda não favoritou nenhum filme.{" "}
          <Link to="/" className="text-link">
            Ver filmes populares
          </Link>
        </p>
      ) : (
        <MovieGrid movies={favorites} />
      )}
    </main>
  );
}

export default Favorites;