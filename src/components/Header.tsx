import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo">
        🎬 Catálogo de Filmes
      </NavLink>
      <nav className="header__nav">
        <NavLink to="/" end>
          Início
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;