import React from 'react'
import Waves from '../../assets/waves.svg'
import LogoBranca from '../../assets/logo.svg'
import Instagram from '../../assets/instagram.svg'
import Linkedin from '../../assets/linkedin.svg'

function Footer() {
  return (
    <>
    <img src={Waves} alt='waves footer'/> 
    <img src={LogoBranca} alt='Logo branca' />
    <div className='coluna-um'>
    <span>ONGs</span>
    <span>Voluntariado</span>
    <span>Causas</span>
    <span>Fórum</span>
    </div>
    <div className='coluna-dois'>
    <span>Cadastre-se</span>
    <span>Login</span>
    </div>
    <div className='coluna-tres'>
    <span><b>Contrate-nos</b></span>
    <span>helpline@gmail.com</span>
    <span><b>Redes Sociais</b></span>
    </div>
    <img scr={Instagram} alt='Logo instagram'/>
    <img src={Linkedin} alt='Logo linkedin'/>
    </>
  )
}

export default Footer