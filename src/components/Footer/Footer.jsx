import React from "react";
import { Link, useLocation } from "react-router-dom";
import Waves from "../../assets/waves.svg";
import LogoBranca from "../../assets/logo-alternative.svg";
import Instagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";
import "./footer.css";


function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="waves-container-img">
          {""}
          {/* <img src={Waves} alt='waves footer'className='waves-container' /> */}
        </div>
        <div className="footer-wrapper">
          <div className="logo-container">
            <img src={LogoBranca} alt="Logo branca" />
          </div>
          <div className="columns">
            <div className="column">
              <span>ONGs</span>
              <span>Voluntariado</span>
              <span>Causas</span>
              <span>Fórum</span>
            </div>
            <div className="column">
              <span>Cadastre-se</span>
              <span>Login</span>
            </div>
            <div className="column">
              <span>
                <b>Contrate-nos</b>
              </span>
              <span>helpline@gmail.com</span>
              <div className="social-links">
                <span>
                  <b>Redes Sociais</b>
                </span>
                <div className="icons">
                  <div className="icones-redes">
                    <i className="bi bi-instagram footer-icon"></i>
                    <i className="bi bi-linkedin footer-icon"></i>
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
