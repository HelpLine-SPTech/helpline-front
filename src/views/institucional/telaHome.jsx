import React, { useState } from "react";
import "./telaHome.css";
import { Link } from "react-router-dom";
import imgQuebraCabeca from "../../assets/quebra-cabeca.svg";
import imgBordaVerde from "../../assets/retangulo-verde.svg";
import imgBordaLaranja from "../../assets/retangulo-laranja.svg";
import Navbar from "../../components/Institucional/NavBarInstitucional/NavBar"; // Certifique-se de que este caminho está correto
import Card from "../../components/Institucional/Card";
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

  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, description });
    // Aqui você pode adicionar a lógica de envio do formulário, por exemplo, usando uma API.
  };

  return (
    <>
      <Navbar /> {/* Componente da NavBar sendo utilizado aqui */}
      
      <section className="view-80 font-poppins d-flex flex-center">
        <div className="home1 d-flex flex-center"> {/*arrumar o d-flex*/}
          <div className="div-texto1 flex-gap-16">
            <h1>Conectando generosidade, alimentando esperança.</h1>
            <p className="descHome">
              Na HelpLine, nosso objetivo é simples: unir aqueles que desejam{" "}
              <span className="bold">fazer a diferença</span> com aqueles que
              precisam de ajuda.
            </p>
          </div>
          <div className="div-img1">
            <img
              className="img-puzzle"
              src={imgQuebraCabeca}
              alt="Imagem ilustrativa de quebra-cabeça"
            />
          </div>
        </div>
      </section>

      <div className="bar-leftH">
        <img className="img-verdeH" src={imgBordaVerde} alt="" />
      </div>

      <section className="cards-container view-80 font-poppins d-flex flex-center">
        <div className="section-cards flex-gap-32">
          <h1>Seja um HelpLiner você também!</h1>
          <div className="cards1 d-flex flex-center flex-gap-32">
            <Card
              title="ONGs"
              features={ongFeatures.map((feature, index) => <li key={index}>{feature}</li>)}
              buttonText={<Link to="/register/ong" className="button-home-card bold">Cadastrar ONG</Link>}
            />
            <Card
              title="Voluntário"
              features={volunteerFeatures.map((feature, index) => <li key={index}>{feature}</li>)}
              buttonText={<Link to="/register/user" className="button-home-card bold">Ser Voluntário</Link>}
            />
          </div>
        </div>
      </section>
    
      <Footer />
    </>
  );
}

export default TelaHome;
