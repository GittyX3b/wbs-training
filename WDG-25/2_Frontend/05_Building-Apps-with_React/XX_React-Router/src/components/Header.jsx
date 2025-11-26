import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="header">
      {/* Anchor-Tags nur für Externes oder für Navigation innerhalb einer Seite */}
      <a href="#">
        <h1>Webb Gallery</h1>
        <p>
          Fancy stars
          <span role="img" aria-label="Star">
            💫
          </span>
        </p>
      </a>
      <nav>
        <ul>
          <li>
            {/* NavLink für Client-Side Navigation mit automatischer "active" CSS-Klasse */}
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            {/* NavLink verhindert Page-Reload und navigiert per JavaScript */}
            <NavLink className="navlink" to="/alpha-centauri">
              Alpha Centauri
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
