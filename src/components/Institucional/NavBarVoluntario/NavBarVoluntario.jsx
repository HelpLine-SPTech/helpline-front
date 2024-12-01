import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/user/userSlice';
import logo from '../../../assets/logo-alternative.svg';
import './NavBarVoluntario.css';
import ChatService from '../../../services/chatService';

function NavBarVoluntario() {
  const user = useSelector(selectUser);
  const chatService = ChatService.instance;
  chatService.connect();

  return (
    <header className="headerVoluntario font-poppins d-flex">
      <nav className="navVoluntario">
        {/* Logo */}
        <Link to={'/'} className="logoVoluntario">
          <img src={logo} alt="HelpLine logo" className="logo-imgVoluntario" />
        </Link>

        {/* Navigation Links */}
        <ul className="nav-listVoluntario">
          <li className="nav-itemVoluntario">
            <Link to={'/forum'} className="nav-linkVoluntario">Início</Link>
          </li>
          <li className="nav-itemVoluntario">
            <Link to={'/dashboard/chat'} className="nav-linkVoluntario">Chat</Link>
          </li>
          <li className="nav-itemVoluntario">
            <Link to={'/voluntario/vagas'} className="nav-linkVoluntario">Vagas</Link>
          </li>
          <li className="nav-itemVoluntario">
            <Link to={'#'} className="nav-linkVoluntario">Notificações</Link>
          </li>
          <li className="nav-itemVoluntario">
            <Link to={`/perfil/${user.id}`} className="nav-linkVoluntario">Meu Perfil</Link>
          </li>
          <li className="nav-itemVoluntario">
            <Link to={'/'} className="nav-linkVoluntario">Sair</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBarVoluntario;
