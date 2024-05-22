import React, { useEffect, useState } from 'react'
import "./TelaVoluntariado.css";
import { useNavigate, Link } from 'react-router-dom'
import imgBordaVerde from "../../../assets/retangulo-verde.svg"
import imgBordaLaranja from "../../../assets/retangulo-laranja.svg"
import Navbar from "../../../components/Institucional/NavBarInstitucional/NavBar"
import Card from "../../../components/Institucional/Card"
import imgVoluntariado from "../../../assets/img-voluntariado.svg"

function TelaVoluntariado() {
    return (
        <>
            <Navbar />
            <section className='section-voluntariado view-80 font-poppins'>
                <div className='div-text'>
                    <h1>Seja um agente da transformação</h1>
                    <p>Junte-se a nós e faça a diferença em sua comunidade! Seja parte dessa rede de solidariedade, contribuindo para causas importantes e fortalecendo laços comunitários. Cadastre-se como voluntário hoje e impacte positivamente o mundo ao seu redor!</p>
                </div>
                <div className='div-img-voluntariado'>
                    <img className='img-voluntario' src={imgVoluntariado} alt="" />
                </div>

            </section>
            <div className='bar-left'><img className='img-verde' src={imgBordaVerde} alt="" /></div>
            <section className='cards-container view-80 font-poppins'>
                <h2>De olho no futuro</h2>

                <div className='container-card-causa d-flex'>
                    <div className='card-causa'>
                        <div className='card-information'>
                            <span>Apoio às ONGs</span>
                            <p>Estabelecer parcerias sólidas com ONGs para fornecer suporte contínuo e recursos necessários para suas iniciativas.</p>
                        </div>
                    </div>
                    <div className='card-causa'>
                        <div className='card-information'>
                            <span>Expansão do Impacto</span>
                            <p>Continuar a expandir e fortalecer a presença da HelpLine, alcançando mais comunidades e pessoas em todo o país.</p>
                        </div>
                    </div>
                    <div className='card-causa'>
                        <div className='card-information'>
                            <span>Doações Generosas</span>
                            <p>Promover uma cultura de doação e generosidade, incentivando doadores a contribuir de forma significativa para apoiar as iniciativas da Helpline e suas causas apoiadas.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='bar-right'><img className='img-laranja' src={imgBordaLaranja} alt="" /></div>
        </>
    )
}

export default TelaVoluntariado;