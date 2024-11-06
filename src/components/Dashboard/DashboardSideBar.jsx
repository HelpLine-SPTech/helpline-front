import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo-alternative.svg'
import './dashboard.css'
import ChatService from '../../services/chatService'

function DashboardSideBar({ className = '' }) {
  const chatService = ChatService.instance
  
  const location = useLocation()
  const links = [
    {
      label: 'Dashboard',
      to: '/dashboard',
      isActive: location.pathname === '/dashboard',
      icon: <i className="bi bi-bar-chart-line-fill icon-lg icon-white m-h-24"></i>
    },
    {
      label: 'Financeiro',
      to: '/dashboard/financial',
      isActive: location.pathname === '/dashboard/financial',
      icon: <i className="bi bi-cash-coin icon-lg icon-white m-h-24"></i>
    },
    {
      label: 'Vagas',
      to: '/dashboard/jobs/list',
      isActive: location.pathname.includes('/jobs'),
      icon: <i className="bi bi-gear-fill icon-lg icon-white m-h-24"></i>
    },
    {
      label: 'Fórum',
      to: '/forum',
      isActive: false,
      icon: <i className="bi bi-people-fill icon-lg icon-white m-h-24"></i>
    },
    {
      label: 'Chat',
      to: '/dashboard/chat',
      isActive: location.pathname === '/dashboard/chat',
      icon: <i className="bi bi-chat-square-text-fill icon-lg icon-white m-h-24"></i>
    }
  ]

  return (
    <nav className={`${className} w-sm h-fill-screen d-flex flex-vertical justify-space-around`}>
      <div className='m-h-24'>
        <img className='ml-28' src={logo} alt="HelpLine logo" />
      </div>
      <ul className='d-flex flex-vertical h-fill justify-center gap-60'>
        {
          links.map((link, i) => (
            <li key={i} className={`sidebar-link ${link.isActive ? 'link-active' : ''}`}>
              <Link to={link.to} className="d-flex align-center" style={{textDecoration: 'none'}}>
                {link.icon}
                <span className={'sidebar-link-text'}>{link.label}</span>
              </Link>
            </li>
          ))
        }
      </ul>
      <div>
        <Link to={'/'} className='d-block' style={{width: '100%', textAlign: 'center', fontSize: '22px', color: 'white', fontFamily: 'Spartan, sans-serif'}}>sair</Link>
      </div>
    </nav>
  )
}

DashboardSideBar.propTypes = {
  className: PropTypes.string
}

export default DashboardSideBar