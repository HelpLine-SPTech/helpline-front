import React from "react";
import { Footer } from "../../components";
import { Link } from 'react-router-dom'
import { NavInstitucional } from "../../components";
import GroupSelo from "../../assets/GroupSelo.svg";
import setaEsquerda from "../../assets/CirculeSetaEsquerda.svg";
import setaDireita from "../../assets/CirculeSetaDireita.svg";
import imgCardUm from "../../assets/imgCard1.svg";
import imgCardDois from "../../assets/imgCard2.svg";
import imgCardTres from "../../assets/imgCard3.svg";
import imgBordaVerde from "../../assets/retangulo-verde.svg";
import imgBordaLaranja from "../../assets/retangulo-laranja.svg";
import "./telaOng.css";

function TelaOng() {
  return (
    <>
      <NavInstitucional />
      <session className="view-80 font-poppins d-flex flex-center ">
        <div className="d-flex justify-space-between flex-center section1-ong">
          <div class="div-texto-ong flex-gap-24">
            <h1 className="h1-home">
              Seja voluntário e ganhe selos de reconhecimento
            </h1>
            <div>
              <span className="texto-ong">
                Aqui na HelpLine, <span className="destaque-span">reconhecemos e valorizamos </span> as contribuições
                dos nossos voluntários através de selos de reconhecimento.
                Ao ganhar esses selos, os voluntários recebem{" "}
                <span className="destaque-span"> reconhecimento </span>
                público e inspiram outros a se juntarem a nós na causa da
                solidariedade. Juntos, construímos uma rede de apoio onde
                <span className="destaque-span"> cada ação é valorizada</span>.
              </span>
            </div>
          </div>
          <div className="div-img1">
            <img className="img-selo" src={GroupSelo} alt="selos" />
          </div>
        </div>

      </session>
      <div className='bar-left'><img className='img-verde' src={imgBordaVerde} alt="" /></div>
      <session className="session-view font-poppins">
        <div className="bloco-dois session-view">
          <h1 className="h1-home">Conheça novas ONGs</h1>

          <div className="div-card-ong">
            <div class="card-ong">
              <div>
                <img className="img-card-ong" src={imgCardUm} alt="" />
              </div>
              
              <div className="div-text-ong">
              <span className="titulo-card-ong">Bem da Madrugada</span>
                <span className="text-card">
                  Nosso objetivo é promover o 
                  direito ao lazer e à infância
                  saudável...
                </span>
              </div>
                <button className='btn-conhecer-ong'><Link to={'/register'} className="link-button-home">Conhecer</Link></button>
            </div>
            <div class="card-ong">
              <div>
                <img className="img-card-ong" src={imgCardUm} alt="" />
              </div>
              
              <div className="div-text-ong">
              <span className="titulo-card-ong">Bem da Madrugada</span>
                <span className="text-card">
                  Nosso objetivo é promover o 
                  direito ao lazer e à infância
                  saudável...
                </span>
              </div>
                <button className='btn-conhecer-ong'><Link to={'/register'} className="link-button-home">Conhecer</Link></button>
            </div>
            <div class="card-ong">
              <div>
                <img className="img-card-ong" src={imgCardUm} alt="" />
              </div>
              
              <div className="div-text-ong">
              <span className="titulo-card-ong">Bem da Madrugada</span>
                <span className="text-card">
                  Nosso objetivo é promover o 
                  direito ao lazer e à infância
                  saudável
                </span>
              </div>
                <button className='btn-conhecer-ong'><Link to={'/register'} className="link-button-home">Conhecer</Link></button>
            </div>
          </div>

        </div>
      </session>

      <div className='bar-right'><img className='img-laranja' src={imgBordaLaranja} alt="" /></div>
        <session className="section-ong3 view-90 font-poppins">
        <h1 className="h1-home">Vagas disponíveis</h1>
          <div className="bloco-tres">

            <div className="card-ong-session3">
              <div class="card-um">
                <div className="img-cardUm">
                  <img className="img-card-ong" src={imgCardUm} alt="img card um" />
                </div>

                <div className="div-text-ong">
                  <h4>Recepcionista</h4>
                  <span className="text-card">
                    ONG: Bem da Madrugada
                </span>
                <button className='btn-conhecer-ong'><Link to={'/institucional/volunteer'} className="link-button-home">Saiba mais</Link></button>
                </div>
              </div>
            </div>
            <div className="card-ong-session3">
              <div class="card-um">
                <div className="img-cardUm">
                  <img className="img-card-ong" src={imgCardUm} alt="img card um" />
                </div>

                <div className="div-text-ong">
                  <h4>Recepcionista</h4>
                  <span className="text-card">
                    ONG: Bem da Madrugada
                </span>
                <button className='btn-conhecer-ong'><Link to={'/institucional/volunteer'} className="link-button-home">Saiba mais</Link></button>
                </div>
              </div>
            </div>
            <div className="card-ong-session3">
              <div class="card-um">
                <div className="img-cardUm">
                  <img className="img-card-ong" src={imgCardUm} alt="img card um" />
                </div>

                <div className="div-text-ong">
                  <h4>Recepcionista</h4>
                  <span className="text-card">
                    ONG: Bem da Madrugada
                </span>
                <button className='btn-conhecer-ong'><Link to={'/institucional/volunteer'} className="link-button-home">Saiba mais</Link></button>
                </div>
              </div>
            </div>
          </div>
        </session>
        <Footer />
    </>
  );
}

export default TelaOng;
