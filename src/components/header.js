import logo from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="component header">
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Accueil</NavLink>
          </li>
          <li>
          <NavLink to='/about'>A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;