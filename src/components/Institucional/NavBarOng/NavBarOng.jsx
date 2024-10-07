import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo-alternative.svg'
import "./NavBarOng.css";
import ChatService from "../../../services/chatService";
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/user/userSlice';

function NavBarOng() {
  const user = useSelector(selectUser)
  const chatService = ChatService.instance;
  chatService.connect();

  return (
    <header className="header font-poppins d-flex">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to={'/forum '} className="nav-link">Início</Link></li>
          <li className="nav-item"><Link to={'/dashboard/chat'} className="nav-link">Chat</Link></li>
          <li className="nav-item"><Link to={'/dashboard'} className="nav-link">Dashboard</Link></li>
          <Link to={''} className='logo' href="#"><img src={logo} alt="HelpLine" className="logo-img" /></Link>
          <li className="nav-item"><Link to={'#'} className="nav-link">Notificações</Link></li>
          <li className="nav-item"><Link to={`/perfil/${user.id}`} className="nav-link">Meu Perfil</Link></li>
          <li className="nav-item"><Link to={'/'} className="nav-link">Sair</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBarOng;