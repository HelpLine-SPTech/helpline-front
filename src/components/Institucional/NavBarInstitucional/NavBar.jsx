import React, { useState } from 'react';
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

import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/logo-alternative.svg'
import "./NavBar.css";

function NavBar() {
    return (
      <header className="header font-poppins d-flex">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to={'/institucional/telaOng'} className="nav-link">ONGs</Link></li>
          <li className="nav-item"><Link to={'/institucional/volunteer'} className="nav-link">Voluntariado</Link></li>
          <Link to={'/institucional'} className="logo"><img src={logo} alt="HelpLine" className="logo-img" /></Link>
          <li className="nav-item"><Link to={'/'} className="nav-link">Entrar</Link></li>
          <li className="nav-item"><Link to={'/register'} className="nav-link">Cadastre-se</Link></li>
        </ul>
      </nav>
    </header>
    );
  }
  
  export default NavBar;
