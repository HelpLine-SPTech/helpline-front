import React from "react";
import "./ModalConfirmacao.css";
import { Link } from "react-router-dom";

function ModalConfirmacao({ titulo, texto, open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div className="container">
        <div className="Titulo">{titulo}</div>
        <div className="subtitulo">{texto}</div>
        <div className="btns">
          <button className="btn-sim">
            <Link to={"/institucional/telaOng"} className="btn-simInterno">Sim</Link>
          </button>
          <button className="btn-nao" onClick={onClose}>
            <Link to={"/institucional/telaOng"} className="btn-naoInterno">Não</Link>
          </button>
        </div>
      </div>
      <div className="modal-confirmacao" onClick={onClose} />
    </>
  );
}

export default ModalConfirmacao;
