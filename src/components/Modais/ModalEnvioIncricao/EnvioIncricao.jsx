import React from 'react'
import { Link } from 'react-router-dom';
import iconeCheck from '../../../assets/iconeCheck.svg';
import "./EnvioIncricao.css";
function EnvioIncricao() {
  return (
   <>
     <div className='container'>

        <div className='btn-fecharModal' >
        <button className="btn-Fechar"><Link to={'/institucional/telaOng'} className="texto-btn">X</Link></button>
        </div>

        <div className='Titulo'>
        <b>Sua inscrição foi enviada!</b>
        </div>
  
        <div className='img-iconeCheck'>
        <img src={iconeCheck} alt="iconeCheck" />
        </div>
  
        <div className='subtitulo'>
        <span>Aguarde a ONG entrar em contato.</span>
        </div>

        </div>
   </>
  )
}

export default EnvioIncricao