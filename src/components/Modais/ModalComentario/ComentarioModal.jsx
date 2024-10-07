import React, { useState } from 'react';
import './ComentarioModal.css';

function ComentarioModal({ open, onClose, onSubmit }) {
  const [content, setContent] = useState('')

  if (!open) return null;

  return (
    <>
      <div className='modal-wrapper' >
      <div className='container-modal absolute-center pd-16'>
        <button className='modal-close-btn' onClick={onClose}>
          <i className="bi bi-x"></i>
        </button>
        <div className='container-interno'>
          <textarea className='input-comment-modal' placeholder='Escreva seu comentário...' value={content} onChange={(e) => setContent(e.target.value)} style={{height: '150px', resize: 'none'}}/>
          <div className='btn-interno'>
            <button className='btn-post-comment' onClick={() => onSubmit(content)}>
            <i className="bi bi-send icon-g"></i>
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ComentarioModal;
