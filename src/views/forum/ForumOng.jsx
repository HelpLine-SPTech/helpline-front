import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBarOng from "../../components/Institucional/NavBarOng/NavBarOng"
import "./ForumOng.css";
import bemdamadrugada from "../../assets/bemdamadrugada.png"


function ForumOng() {
  const [newPostContent, setNewPostContent] = useState('');
  const [publicacoes, setPublicacoes] = useState([]);
  const [curtidas, setCurtidas] = useState(0);

  const publicar = () => {
    const newPostElement = (
      <div className="publicacao">
        <p>{newPostContent}</p>
        <button onClick={() => setCurtidas(curtidas + 1)}>Curtir ({curtidas})</button>
        <input type="text" placeholder="Deixe seu comentário..." />
        <button>Enviar comentário</button>
      </div>
    );

    setPublicacoes([...publicacoes, newPostElement]);
    setNewPostContent('');
  };

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
            <span>Campanhas em destaque</span>
            </div>
          </div>
        </div>

        <div className="direita">
          <div className="search-container">
            <input type="text" placeholder="Pesquisar..." className="search-input" />
            <button type="button" className="search-button">
              Pesquisar
            </button>
          </div>
          
          <div className="search-container">
            <input
            className="search-input" 
              type="text"
              placeholder="Escreva sua publicação..."
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
            <button className="search-button" onClick={publicar}>Publicar</button>
          </div>
          
        </div>

      </div>
      <Footer/>
    </>
  );
}

export default ForumOng;
