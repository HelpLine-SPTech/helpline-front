import React from 'react';
import './ComentarioModal.css';
import { Link } from 'react-router-dom';

function ComentarioModal({ open, onClose, onSubmit }) {
  if (!open) return null;

  return (
    <>
      <div className='modal-wrapper' onClick={onClose} >
      <div className='container-modal fixed-center pd-16'>
        <button className='modal-close-btn' onClick={onClose}>
          <i class="bi bi-x"></i>
        </button>
        <div className='container-interno'>
          <textarea className='input-comment-modal' placeholder='Escreva seu comentário...' style={{height: '150px', resize: 'none'}}/>
          <div className='btn-interno'>
            <button className='btn-post-comment' onClick={onSubmit}>
            <i class="bi bi-send icon-g"></i>
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ComentarioModal;
