import React from "react";
import iconeCheck from "../../../assets/iconeCheck.svg";
import "./EditarVaga.css";

function EditarVaga({ titulo, texto, tipo, open, onClose }) {
  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <>
      <div className="modal-overlay" onClick={handleOverlayClick} />
      <div className="container">
        <div className="btn-fecharModal">
          <button className="btn-Fechar" onClick={onClose}>
            <span className="texto-btn">X</span>
          </button>
        </div>

        <div className="Titulo">{titulo}</div>

        <div className="img-iconeCheck">
          <img src={iconeCheck} alt="iconeCheck" />
        </div>

        <div className="subtitulo">{texto}</div>
      </div>
    </>
  );
}

export default EditarVaga;
