import React from 'react'
import "./Publicacao.css";

function Publicacao(){
    return(
        <>
        <div className="search-container">
            <input
            className="search-input" 
              type="text"
              placeholder="Escreva sua publicação..."
            />
            <button className="search-button">Publicar</button>
          </div>
        </>
    )  
}

export default Publicacao;