import { NavLink } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

function Header() {
  const { favorites } = useFavorites();

  return (
    <header className="header">
      <NavLink to="/" className="header__logo">
        🎬 Catálogo de Filmes
      </NavLink>

      <nav className="header__nav">
        <NavLink to="/" end>
          Início
        </NavLink>
        <NavLink to="/busca">Busca</NavLink>
        <NavLink to="/favoritos">Favoritos ({favorites.length})</NavLink>
      </nav>
    </header>
  );
}

export default Header;
