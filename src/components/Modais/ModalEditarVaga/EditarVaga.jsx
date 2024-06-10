import React from "react";
import { Link } from "react-router-dom";
import iconeCheck from "../../../assets/iconeCheck.svg";
import "./EditarVaga.css";

function EditarVaga({ titulo, texto, tipo }) {
  console.log(tipo)
  console.log(texto)
  console.log(titulo)

  switch (tipo) {
    case "remover":
      return (
        <div className="container">
          <div className="btn-fecharModal">
            <button className="btn-Fechar">
              <Link to={"/institucional/telaOng"} className="texto-btn">
                X
              </Link>
            </button>
          </div>

          <div className="Titulo">{titulo}</div>

          <div className="img-iconeCheck">
            <img src={iconeCheck} alt="iconeCheck" />
          </div>

          <div className="subtitulo">{texto}</div>
        </div>
        
      );

    case "editar":
      return (
        <div className="container">
          <div className="btn-fecharModal">
            <button className="btn-Fechar">
              <Link to={"/institucional/telaOng"} className="texto-btn">
                X
              </Link>
            </button>
          </div>

          <div className="Titulo">{titulo}</div>

          <div className="img-iconeCheck">
            <img src={iconeCheck} alt="iconeCheck" />
          </div>

          <div className="subtitulo">{texto}</div>
        </div>
      
      );

      case "enviar":
        return (
          <div className="container">
            <div className="btn-fecharModal">
              <button className="btn-Fechar">
                <Link to={"/institucional/telaOng"} className="texto-btn">
                  X
                </Link>
              </button>
            </div>
  
            <div className="Titulo">{titulo}</div>
  
            <div className="img-iconeCheck">
              <img src={iconeCheck} alt="iconeCheck" />
            </div>
  
            <div className="subtitulo">{texto}</div>
          </div>
        
        );

        case "adicionar":
          return (
            <div className="container">
              <div className="btn-fecharModal">
                <button className="btn-Fechar">
                  <Link to={"/institucional/telaOng"} className="texto-btn">
                    X
                  </Link>
                </button>
              </div>
    
              <div className="Titulo">{titulo}</div>
    
              <div className="img-iconeCheck">
                <img src={iconeCheck} alt="iconeCheck" />
              </div>
    
              <div className="subtitulo">{texto}</div>
            </div>
          
          );

        default:
          return null;
  }
}

export default EditarVaga;
