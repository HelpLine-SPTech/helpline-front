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
          <li className="nav-item"><a href="#" className="nav-link">ONGs</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Voluntariado</a></li>
          <a className='logo' href="#"><img src={logo} alt="HelpLine" className="logo-img" /></a>
          <li className="nav-item"><a href="#" className="nav-link">Entrar</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Cadastre-se</a></li>
        </ul>
      </nav>
    </header>
    );
  }
  
  export default NavBar;