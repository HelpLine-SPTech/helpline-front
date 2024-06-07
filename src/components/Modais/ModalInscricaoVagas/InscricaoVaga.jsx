import React from 'react';
import { Link } from 'react-router-dom';
import iconeCheck from '../../../assets/iconeCheck.svg';
import './inscricaoVaga.css';


function InscricaoVaga() {
  return (
  <>
  <div className='container'>

  <div className='btn-fecharModal' >
  <button className="btn-Fechar"><Link to={'/institucional/telaOng'} className="texto-btn">X</Link></button>
  </div>

  <div className='Titulo'>
    <b>Vaga adicionada com sucesso!</b>
  </div>
    
    <div className='img-iconeCheck'>
    <img src={iconeCheck} alt="iconeCheck" />
    </div>
    
    <div className='subtitulo'>
      <span>A vaga aparecerá em seu perfil.</span>
    </div>

  </div>
  </>
  )
}

export default InscricaoVaga
