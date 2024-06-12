import React from 'react';
import './ComentarioModal.css';
import { Link } from 'react-router-dom';

function ComentarioModal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div className='modal-overlay' onClick={onClose} />
      <div className='container'>
        <div className='btn-fecharComentario'>
          <button className='btn-fecharStyle' onClick={onClose}>X</button>
        </div>
        <div className='container-interno'>
          <div className='texto-interno'>
            <span>Escrever publicação...</span>
          </div>
          <div className='btn-interno'>
            <button className='btn-internoStyle'>
              <Link to={'/institucional/telaus'} className="texto-btnInterno">Publicar</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComentarioModal;
