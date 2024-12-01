import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/user/userSlice';
import logo from '../../../assets/logo-alternative.svg';
import './NavBarOng.css';
import ChatService from '../../../services/chatService';

function NavBarOng() {
  const user = useSelector(selectUser)
  const chatService = ChatService.instance;
  chatService.connect();

  return (
    <header className="headerOng font-poppins d-flex">
      <nav className="navOng">
        {/* Logo */}
        <Link to={'/'} className="logoOng">
          <img src={logo} alt="HelpLine logo" className="logo-imgOng" />
        </Link>

        {/* Navigation Links */}
        <ul className="nav-listOng">
          <li className="nav-itemOng">
            <Link to={'/forum'} className="nav-linkOng">Início</Link>
          </li>
          <li className="nav-itemOng">
            <Link to={'/dashboard/chat'} className="nav-linkOng">Chat</Link>
          </li>
          <li className="nav-itemOng">
            <Link to={'/dashboard'} className="nav-linkOng">Dashboard</Link>
          </li>
          <li className="nav-itemOng">
            <Link to={'#'} className="nav-linkOng">Notificações</Link>
          </li>
          <li className="nav-itemOng">
            <Link to={`/perfil/${user.id}`} className="nav-linkOng">Meu Perfil</Link>
          </li>
          <li className="nav-itemOng">
            <Link to={'/'} className="nav-linkOng">Sair</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBarOng;
