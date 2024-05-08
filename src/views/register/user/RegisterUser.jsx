import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import dayjs from 'dayjs';
import UserLoginInfoForm from './UserLoginInfoForm';

export const RegisterUserContext = React.createContext();

function RegisterUser() {

  const FORM_STATE = {
    selectedIndex: 0,
    loginInfo: {
      email: '',
      password: ''
    },
    personalData: {
      name: '',
      birthDate: '',
      cpf: ''
    },
    address: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      state: ''
    }
  }
  return (
    <RegisterUserContext.Provider value={FORM_STATE}>
      <div>
        <Link to={'/'} className='font-league font-24 bold m-32' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black'}}>
          <i className="bi bi-chevron-left font-32"></i>
          Voltar
        </Link>
        <div className='shadow w-fit absolute-center' style={{padding: '64px', borderRadius: '40px'}}>
          <div className='w-fit m-align-center mb-32'>
            <img src={logo} alt="Helpline logo" className='ml-28'/>
          </div>
          {<UserLoginInfoForm />}
        </div>
      </div>
    </RegisterUserContext.Provider>
  )
}

export default RegisterUser