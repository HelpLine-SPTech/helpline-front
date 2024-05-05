import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-black.svg'

function RegisterView() {
  return (
    <div>
      <Link to={'/'} className='font-league font-24 bold m-32' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black'}}>
        <i className="bi bi-chevron-left font-32"></i>
        Voltar
      </Link>
      <div className='shadow w-fit absolute-center' style={{padding: '80px', borderRadius: '40px'}}>
        <div className='w-fit m-align-center mb-32'>
          <img src={logo} alt="Helpline logo" className='ml-28'/>
        </div>
        <h3 className='bold font-league text-center mb-32'>Cadastrar como:</h3>
        <div className='d-flex' style={{gap: '80px'}}>
          <div className='text-center font-league bold'>
            <Link to={'/register/user'} className='d-block mb-32 shadow-hover' style={{padding: '52px 56px', backgroundColor: '#CCE8A0', borderRadius: '25px', transition: 'all 300ms ease-in-out'}}><i className="bi bi-people-fill icon-xxg" style={{color: '#285430'}}></i></Link>
            Usuário
          </div>
          <div className='text-center font-league bold'>
            <Link to={'/register/ong'} className='d-block mb-32 shadow-hover' style={{padding: '52px 56px', backgroundColor: '#FFC59E', borderRadius: '25px', transition: 'all 300ms ease-in-out'}}><i className="bi bi-person-fill icon-xxg" style={{color: '#DD7631'}}></i></Link>
            ONG
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterView