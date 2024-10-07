import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo-alternative.svg'
import "./NavBar.css";
import ChatService from '../../../services/chatService'

function NavBar() {
    const chatService = ChatService.instance;
    chatService.connect();
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