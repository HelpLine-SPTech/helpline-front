import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-alternative.svg';
import './NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="headerI font-poppins d-flex">
      <nav className="navI">
        {/* Logo */}
        <Link to={'/institucional'} className="logoI">
          <img src={logo} alt="HelpLine" className="logo-imgI" />
        </Link>

        {/* Botão hamburguer */}
        <button className="menu-toggleI" onClick={toggleMenu}>
          <span className="menu-iconI"></span>
        </button>

        {/* Lista de Navegação */}
        <ul className={`nav-listI ${menuOpen ? 'active' : ''}`}>
          <li className="nav-itemI">
            <Link to={'/institucional/us'} className="nav-linkI">ONGs</Link>
          </li>
          <li className="nav-itemI">
            <Link to={'/institucional/volunteer'} className="nav-linkI">Voluntariado</Link>
          </li>
          <li className="nav-itemI">
            <Link to={'/'} className="nav-linkI">Entrar</Link>
          </li>
          <li className="nav-itemI">
            <Link to={'/register'} className="nav-linkI">Cadastre-se</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;