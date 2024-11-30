import React from "react";
import { Link } from "react-router-dom";
import Waves from "../../assets/waves.svg";
import LogoBranca from "../../assets/logo-alternative.svg";
import Instagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container font-poppins">
        <div className="waves-container-img"></div>
        <div className="footer-wrapper">
          <div className="columns">
            <div className="column">
              <Link to="/ongs">
                <span>ONGs</span>
              </Link>
              <Link to="/voluntariado">
                <span>Voluntariado</span>
              </Link>
              <Link to="/causas">
                <span>Causas</span>
              </Link>
              <Link to="/forum">
                <span>Fórum</span>
              </Link>
            </div>
            <div className="column">
              <Link to="/cadastro">
                <span>Cadastre-se</span>
              </Link>
              <Link to="/login">
                <span>Login</span>
              </Link>
            </div>
            <div className="column">
              <span>
                <b className="footer-name">Contrate-nos</b>
              </span>
              <a href="mailto:helpline@gmail.com">
                <span>helpline@gmail.com</span>
              </a>
              <div className="social-links">
                <span>
                  <b className="footer-name">Redes Sociais</b>
                </span>
                <div className="icons">
                  <div className="icones-redes">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-instagram footer-icon"></i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-linkedin footer-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
