import React from 'react';
import { Link } from 'react-router-dom';
import iconeCheck from '../../../assets/iconeCheck.svg';
import './inscricaoVaga.css';


function InscricaoVaga() {
  return (
  <>
  <div className='Container'>

  <div >
  <button className="btnFechar"><Link to={'/institucional/telaOng'} className="texto-btn">X</Link></button>
  </div>

  <div className='Titulo'>
    <h1>Vaga adicionada com sucesso!</h1>
  </div>
    
    <div className='img-iconeCheck'>
    <img src={iconeCheck} alt="iconeCheck" />
    </div>
    
  </div>
  </>
  )
}

export default InscricaoVaga
