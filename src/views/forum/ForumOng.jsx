import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBarOng from "../../components/Institucional/NavBarOng/NavBarOng"
import "./ForumOng.css";
import bemdamadrugada from "../../assets/bemdamadrugada.png"
import Post from "../../components/Post/Post";


function ForumOng() {
  return (
    <>
      <NavBarOng />

      <div className="forum-ong">
        
        <div className="esquerda">

          <div className="sidebar">
            <div className="infos" >
              <img src={bemdamadrugada} className="logo-container" alt="" />
              <h2>Bem da Madrugada</h2>
              
              <p>O grupo Bem da Madrugada é um Organização Não Governamental (ONG) com foco na ajuda de necessitados no momento em que encontram-se menos amparados.</p>
              
              <div className="mensagens" >
              <a href=""><h3>Mensagens diretas</h3></a>
              <a href=""><h3>Minhas postagens</h3></a>
              </div>
              
            </div>


            <div className="notifications-container">
            <h2>Notificações</h2>
            <span className = "descricao-notificacoes">Campanhas em destaque</span>
            </div>
          </div>
        </div>

        <div className="direita">
          <div className="barras-pesquisa">
            <input type="text" placeholder="Pesquisar..." className="search-input" />
            <button type="button" className="search-button">
              Pesquisar
            </button>
          </div>
          
          <div className="barras-pesquisa">
            <input className="search-input"type="text" placeholder="Escreva sua publicação..."/>
            <button className="search-button" onClick>Publicar</button>
           
          </div>
          <Post/>
        </div>

      </div>
      <Footer/>
    </>
  );
}

export default ForumOng;
