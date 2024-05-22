import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/logo-alternative.svg'
import "./NavBarOng.css";

function NavBarOng() {
    return (
      <header className="header font-poppins d-flex">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#" className="nav-link">Início</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Chat</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Dashboard</a></li>
          <a className='logo' href="#"><img src={logo} alt="HelpLine" className="logo-img" /></a>
          <li className="nav-item"><a href="#" className="nav-link">Notificações</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Meu Perfil</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Sair</a></li>
        </ul>
      </nav>
    </header>
    );
  }
  
  export default NavBarOng;