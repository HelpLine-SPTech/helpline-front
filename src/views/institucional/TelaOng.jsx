import React from "react";
import { Footer } from "../../components";
import { useNavigate, Link } from 'react-router-dom'
import  {NavInstitucional}  from "../../components";
import GroupSelo from "../../assets/GroupSelo.svg";
import setaEsquerda from "../../assets/CirculeSetaEsquerda.svg";
import setaDireita from "../../assets/CirculeSetaDireita.svg";
import imgCardUm from "../../assets/imgCard1.svg";
import imgCardDois from "../../assets/imgCard2.svg";
import imgCardTres from "../../assets/imgCard3.svg";
import btnConhecer from "../../assets/ButtomConhecer.svg";
import imgBordaVerde from "../../assets/retangulo-verde.svg";
import imgBordaLaranja from "../../assets/retangulo-laranja.svg";
import "./telaOng.css";

function TelaOng() {
  return (
    <>
    <NavInstitucional/>
    <div className="sessao-um">
      <session>
        
        <div class="bloco-um">
          <h1>
            Seja voluntário e ganhe selos <br />
            de reconhecimento
          </h1>
          <div className="trecho-texto">
          <span >
            Aqui na HelpLine, <b>reconhecemos e valorizamos</b> as contribuições
            <br /> dos nossos voluntários através de selos de reconhecimento.
            <br /> Ao ganhar esses selos, os voluntários recebem{" "}
            <b>reconhecimento</b>
            <br /> público e inspiram outros a se juntarem a nós na causa da
            <br /> solidariedade. Juntos, construímos uma rede de apoio onde
            <br />
            <b>cada ação é valorizada</b>.
          </span>
          </div>     
          </div>  
           <div className="img-bloco-um">
          <img src={GroupSelo} alt="selos" />
        </div>
        
      </session>
      </div>

      <div className='bar-left'><img className='img-verde' src={imgBordaVerde} alt="" /></div>

      <div className="sessao-dois">
      <session >
        <div className="bloco-dois">
          <h1 className="titulo">Conheça novas ONGs</h1>

          <div className="cards">

             <div className="img-setaEsquerdaDois">
            <img src={setaEsquerda} alt="seta esquerda" />
          </div>

            <div class="card-um">

              <div className="img-cardUm">
                <img src={imgCardUm} alt="img card um" />
              </div>

              <h1>Bem da Madrugada</h1>

              <div className="texto-cardUm">
              <span>
                Nosso objetivo é promover o <br/>
                direito ao lazer e à infância <br/>
                saudável...
              </span>
              </div>
              
              <div className="btn-conhecer">
              <button className='font-league bold custom-button'><Link to={'/register'} className='link-button'>Conhecer</Link></button>
              </div>
            </div>

            <div class="card-dois">

              <div className="img-cardDois">
                <img src={imgCardDois} alt="img card dois" />
              </div>

              <h1>Nós do Bem</h1>

              <div className="texto-carddois">
              <span >
                Principal objetivo combater a <br/>fome e a insegurança <br/>
                alimentar em comunidades...
              </span>
              </div>

              <div className="btn-conhecerdois">
              <button className='font-league bold custom-button'><Link to={'/register'} className='link-button'>Conhecer</Link></button>
              </div>
            </div>

            <div class="card-tres">

              <div className="img-cardTres">
                <img src={imgCardTres} alt="img card tres" />
              </div>

              <h1>Instituto Vivereh</h1>

              <div className="texto-cardtres">
              <span className="">
                Tem como missão fornecer <br/>
                Roupas e itens essenciais para<br/>
                indivíduos e famílias em...
              </span>
              </div>
              
              <div className="btn-conhecertres">
              <button className='font-league bold custom-button'><Link to={'/register'} className='link-button'>Conhecer</Link></button>
              </div>
            </div>  

              <div className="img-setaDireitaDois">
            <img src={setaDireita} alt="seta direita" />
          </div>

          </div>

        </div>
      </session>
      </div>

      <div className='bar-right'><img className='img-laranja' src={imgBordaLaranja} alt="" /></div>
      
      <div className="sessao-tres">
      <session>
        <div className="bloco-tres">
        <h1 className="titulo">Vagas disponíveis</h1>
       
        <div className="img-setaEsquerdaTres">
            <img src={setaEsquerda} alt="seta esquerda" />
          </div>
        <div className="cards">
            <div class="card-um">
              <div className="img-cardUm">
                <img src={imgCardUm} alt="img card um" />
              </div>

              <div className="titulo-recepcionista">
              <h1>Recepcionista</h1>
              </div>

              <div className="subtitulo-bemdamadrugada">
              <b>
              ONG: Bem da Madrugada
              </b>
              </div>

              <div className="btn-saiba">
              <button className='font-league bold custom-button'><Link to={'/institucional/volunteer'} className='link-button'>Saiba mais</Link></button>
              </div>

            </div>
            <div class="card-dois">

              <div className="img-cardDois">
                <img src={imgCardDois} alt="img card dois" />
              </div>

              <div className="titulo-cozinheiro">
              <h1>Cozinheiro</h1>
              </div>

              <div className="subtitulo-nosdobem">
              <b>
              ONG: Nós do Bem
              </b>
              </div>

              <div className="btn-saibadois">
              <button className='font-league bold custom-button'><Link to={'/institucional/volunteer'} className='link-button'>Saiba mais</Link></button>
              </div>

            </div>
            <div class="card-tres">

              <div className="img-cardTres">
                <img src={imgCardTres} alt="img card tres" />
              </div>

              <div className="titulo-juridico">
              <h1>Jurídico</h1>
              </div>

              <div className="subtitulo-instituto">
              <b>
              ONG: Instituto Vivereh
              </b>
              </div>

              <div className="btn-saibatres">
              <button className='font-league bold custom-button'><Link to={'/institucional/volunteer'} className='link-button'>Saiba mais</Link></button>
              </div>
            </div> 

           <div className="img-setaDireitaTres">
            <img src={setaDireita} alt="seta direita" />
          </div>

          </div>

          </div>
      </session>
      </div>
      <Footer />
    </>
  );
}

export default TelaOng;
