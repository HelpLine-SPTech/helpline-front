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
          <li className="nav-item"><Link to={'#'} className="nav-link">ONGs</Link></li>
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