import React from 'react'
import Waves from '../../assets/waves.svg'
import LogoBranca from '../../assets/logo-alternative.svg'
import Instagram from '../../assets/instagram.svg'
import Linkedin from '../../assets/linkedin.svg'
import './footer.css'

function Footer() {
  return (
    <>
    <div id='container'>
      <div className='footer-wrapper'>
        <div className='logo-container'>
          <img src={LogoBranca} alt='Logo branca' />
        </div>
        <div className='columns'>
          <div className='column'>
            <span>ONGs</span>
            <span>Voluntariado</span>
            <span>Causas</span>
            <span>Fórum</span>
          </div>
          <div className='column'>
            <span>Cadastre-se</span>
            <span>Login</span>
          </div>
          <div className='column'>
            <span><b>Contrate-nos</b></span>
            <span>helpline@gmail.com</span>
            <div className='social-links'>
              <span><b>Redes Sociais</b></span>
              <div className='icons' >
                <div className='icones-redes'>
                <img src={Instagram} alt='Logo Instagram' />
                <img src={Linkedin} alt='Logo LinkedIn' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div >
        <img src={Waves} alt='waves footer'className='waves-container' />
      </div>
    </div>
    </>
  )
}

export default Footer