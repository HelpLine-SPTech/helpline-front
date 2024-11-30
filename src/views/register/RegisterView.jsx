import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-black.svg'

function RegisterView() {
  return (
    <div className="waves" style={{
      height: '100vh',
      width: '100vw',
      overflow: 'hidden'
    }}>
      <Link to={'/'} className='font-league font-24 bold m-32' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black'}}>
        <i className="bi bi-chevron-left font-32"></i>
        Voltar
      </Link>
      
      {/* Modal com position fixed e z-index para ficar na frente */}
      <div className='shadow w-fit absolute-center' style={{
        padding: '80px', 
        borderRadius: '40px',
        position: 'fixed',  // Modal vai ficar fixo
        top: '50%',  // Centraliza verticalmente
        left: '50%',  // Centraliza horizontalmente
        transform: 'translate(-50%, -50%)',  // Ajusta a posição para verdadeiro centro
        zIndex: 1000,  // Garantir que o modal fique acima do footer
        backgroundColor: 'white'  // Adiciona fundo branco para destacar o modal
      }}>
        <div className='w-fit m-align-center mb-32'>
          <img src={logo} alt="Helpline logo" className='ml-28'/>
        </div>
        <h3 className='bold font-league text-center mb-32'>Cadastrar como:</h3>
        <div className='d-flex' style={{gap: '80px'}}>
          <div className='text-center font-league bold'>
            <Link to={'/register/user'} className='d-block mb-32 shadow-hover' style={{padding: '52px 56px', backgroundColor: '#CCE8A0', borderRadius: '25px', transition: 'all 300ms ease-in-out'}}>
              <i className="bi bi-people-fill icon-xxg" style={{color: '#285430'}}></i>
            </Link>
            Usuário
          </div>
          <div className='text-center font-league bold'>
            <Link to={'/register/ong'} className='d-block mb-32 shadow-hover' style={{padding: '52px 56px', backgroundColor: '#FFC59E', borderRadius: '25px', transition: 'all 300ms ease-in-out'}}>
              <i className="bi bi-person-fill icon-xxg" style={{color: '#DD7631'}}></i>
            </Link>
            ONG
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterView;
