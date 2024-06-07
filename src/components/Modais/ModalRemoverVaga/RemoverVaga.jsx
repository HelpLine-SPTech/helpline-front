import React from 'react';
import { Link } from 'react-router-dom';
import iconeCheck from '../../../assets/iconeCheck.svg';
import './RemoverVaga.css';

function RemoverVaga() {
  return (
    <>

    <div className='container'>

    <div className='btn-fecharModal' >
    <button className="btn-Fechar"><Link to={'/institucional/telaOng'} className="texto-btn">X</Link></button>
    </div>

    <div className='Titulo'>
     <b>Vaga removida com sucesso!</b>
    </div>
  
    <div className='img-iconeCheck'>
    <img src={iconeCheck} alt="iconeCheck" />
    </div>
  
    <div className='subtitulo'>
    <span>A vaga será removida do seu perfil.</span>
    </div>

    </div>

    </>
  )
}

export default RemoverVaga