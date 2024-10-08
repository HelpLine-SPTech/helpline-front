import React, { useEffect, useState } from "react";
import "./telaHome.css";
import { Link } from "react-router-dom";
import imgQuebraCabeca from "../../assets/quebra-cabeca.svg";
import imgBordaVerde from "../../assets/retangulo-verde.svg";
import imgBordaLaranja from "../../assets/retangulo-laranja.svg";
import Navbar from "../../components/Institucional/NavBarInstitucional/NavBar";
import Card from "../../components/Institucional/Card";
import imgSelo1 from "../../assets/selo-aconchego-partilhado.svg";
import imgSelo2 from "../../assets/selo-enriqueca-infancias.svg";
import imgSelo3 from "../../assets/selo-nutrir-esperança.svg";
import Footer from "../../components/Footer/Footer";

function TelaHome() {
  const ongFeatures = [
    "Encontre voluntários com as habilidades que você precisa",
    "Divulgação de eventos e campanhas",
    "Painéis com métricas importantes para sua ONG",
  ];

  const volunteerFeatures = [
    "Apoiar causas que você acredita",
    "Participação em eventos e atividades",
    "Compartilhamento de experiências",
  ];

  return (
    <>
      <Navbar />
      <section className="view-80 font-poppins d-flex flex-center">
        <div className="d-flex justify-space-between flex-center home-section1">
          <div className="div-texto1-home flex-gap-24">
            <h1 className="h1-home">Conectando generosidade, alimentando esperança.</h1>
            <p className="titulo-inicio-home">
              Na HelpLine, nosso objetivo é simples: unir aqueles que desejam{" "}
              <span className="bold">fazer a diferença</span> com aqueles que
              precisam de ajuda.
            </p>
            <button className="font-league bold custom-button-home">
              <Link to={"/institucional/us"} className="link-button-home">
                Saiba mais
              </Link>
            </button>
          </div>
          <div className="div-img1">
            <img
              className="img-puzzle-home"
              src={imgQuebraCabeca}
              alt="quebra-cabeca"
            />
          </div>
        </div>
      </section>
      <div className="bar-left">
        <img className="img-verde" src={imgBordaVerde} alt="" />
      </div>
      <section className="cards-container view-80 font-poppins">
        <div className="section-cards">
          <h1>Seja um HelpLiner você também!</h1>
          <div className="cards">
            <Card
              title="ONGs"
              features={ongFeatures}
              buttonText={<Link to="/register/ong" className="link-button-home">Cadastrar ONG</Link>}
            />
            <Card
              title="Voluntário"
              features={volunteerFeatures}
              buttonText={<Link to="/register/user" className="link-button-home">Ser Voluntário</Link>}
            />
          </div>
        </div>
      </section>
      <div className="bar-right">
        <img className="img-laranja" src={imgBordaLaranja} alt="" />
      </div>
      <section className="causas view-90 font-poppins">
        <h1>Conheça as causas apoiadas pela HelpLine</h1>

        <div className="container-cards-causa d-flex flex-center">
          <div className="cards-causa">
            <div className="cards-information">
              <span>Doação de roupas</span>
              <img src={imgSelo1} alt="aconchego partilhado" />
              <button className="font-league bold button-ong-apoiada">
                Conhecer ONGs
              </button>
            </div>
          </div>
          <div className="cards-causa">
            <div className="cards-information">
              <span>Doação de brinquedos</span>
              <img src={imgSelo2} alt="enriqueça infancias" />
              <button className="font-league bold button-ong-apoiada">
                Conhecer ONGs
              </button>
            </div>
          </div>
          <div className="cards-causa">
            <div className="cards-information">
              <span>Doação de alimentos</span>
              <img src={imgSelo3} alt="nutrir esperança" />
              <button className="font-league bold button-ong-apoiada">
                Conhecer ONGs
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="bar-left">
        <img className="img-verde" src={imgBordaVerde} alt="" />
      </div>
      <section
        className="view-90 font-poppins"
        style={{ height: "fit-content" }}
      >
        <div className="container-duvidas">
          <form className="form-container">
            <h2 className="h2-form-container">Tem dúvidas Contate-nos?</h2>
            <p className="p-container-duvidas">Mande suas dúvidas ou sugestões atráves do formulário:</p>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descrição:</label>
              <textarea id="description" />
            </div>
            <button
              type="submit"
              className="submit font-league bold custom-button-home"
            >
              Enviar
            </button>
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default TelaHome;
