import React from "react";
import "./ModalConfirmacao.css";
import { Link } from "react-router-dom";

function ModalConfirmacao({ titulo, texto, tipo }) {
  switch (tipo) {
    case "excluir":
      return (
        <div className="container">
          <div className="Titulo">{titulo}</div>

          <div className="subtitulo">{texto}</div>

          <div className="btns">
            <button className="btn-sim">
              {" "}
              <Link to={"/institucional/telaOng"} className="btn-simInterno">
                Sim
              </Link>
            </button>

            <button className="btn-nao">
              {" "}
              <Link to={"/institucional/telaOng"} className="btn-naoInterno">
                Não
              </Link>
            </button>
          </div>
        </div>
      );

    case "editar":
      return (
        <div className="container">
          <div className="Titulo">{titulo}</div>

          <div className="subtitulo">{texto}</div>

          <div className="btns">
            <button className="btn-sim">
              {" "}
              <Link to={"/institucional/telaOng"} className="btn-simInterno">
                Sim
              </Link>
            </button>

            <button className="btn-nao">
              {" "}
              <Link to={"/institucional/telaOng"} className="btn-naoInterno">
                Não
              </Link>
            </button>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default ModalConfirmacao;
