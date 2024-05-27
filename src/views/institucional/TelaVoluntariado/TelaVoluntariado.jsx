import React, { useEffect, useState } from 'react'
import "./TelaVoluntariado.css";
import { useNavigate, Link } from 'react-router-dom'
import imgBordaVerde from "../../../assets/retangulo-verde.svg"
import imgBordaLaranja from "../../../assets/retangulo-laranja.svg"
import Navbar from "../../../components/Institucional/NavBarInstitucional/NavBar"
import Card from "../../../components/Institucional/Card"
import imgVoluntariado from "../../../assets/img-voluntariado.svg"
import pessoa1 from "../../../assets/people1.png"
import Footer from '../../../components/Footer/Footer';


function TelaVoluntariado() {
    return (
        <>
            <Navbar />
            <section className='section-voluntariado view-80 font-poppins'>
                <div className='d-flex justify-space-between flex-center'>
                    <div className='div-text flex-gap-24'>
                        <h1>Seja um agente da transformação</h1>
                        <p>Junte-se a nós e faça a diferença em sua comunidade! Seja parte dessa rede de solidariedade, contribuindo para causas importantes e fortalecendo laços comunitários. Cadastre-se como voluntário hoje e impacte positivamente o mundo ao seu redor!</p>
                    </div>
                    <div className='div-img'>
                        <img className='img-voluntario' src={imgVoluntariado} alt="" />
                    </div>
                </div>
            </section>
            <div className='bar-left'><img className='img-verde' src={imgBordaVerde} alt="" /></div>
            <section className='causas cards-container view-80 font-poppins'>
                <h2>De olho no futuro</h2>
                <div className='container-card-causa d-flex'>
                    <div className='card-causa'>
                        <div className='card-number'>1</div>
                        <div className='card-information'>
                            <span>Cadastre-se no site</span>
                            <p>Cadastre-se no nosso site, e encontre a ONG que mais se encaixa com você  e com seus propósitos.</p>
                        </div>
                    </div>
                    <div className='card-causa'>
                        <div className='card-number'>2</div>
                        <div className='card-information'>
                            <span>Procure ONG’s</span>
                            <p>Com seu login, acesse seu fórum, onde ira encontrar ongs e amigos, para se conectar e postar suas ações.</p>
                        </div>
                    </div>
                    <div className='card-causa'>
                        <div className='card-number'>3</div>
                        <div className='card-information'>
                            <span>Participe de Campanhas</span>
                            <p>Através de posts, você conseguirá entrar em contato com o gestor da ONG que abriu uma campanha e fechar diretamente com ele.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='bar-right'><img className='img-laranja' src={imgBordaLaranja} alt="" /></div>
            <section className='causas cards-container view-90 font-poppins'>
                <h2>Conheça a experiência dos nossos voluntários!</h2>
                <div className='container-cards d-flex justify-space-between flex-center flex-gap-32'>
                    <div className='card-ex'>
                        <img className='img-pessoa' src={pessoa1} alt="" />
                        <p>“Ser parte deste movimento altruísta me proporciona um profundo sentido de realização e propósito. Cada ação realizada em prol dos outros é impulsionada pelo desejo genuíno de tornar o mundo um lugar melhor.”</p>
                        <span className='bold'>- Maria Eduarda</span>
                    </div>
                    <div className='card-ex'>
                        <img className='img-pessoa' src={pessoa1} alt="" />
                        <p>“Ser parte deste movimento altruísta me proporciona um profundo sentido de realização e propósito. Cada ação realizada em prol dos outros é impulsionada pelo desejo genuíno de tornar o mundo um lugar melhor.”</p>
                        <span className='bold'>- Marcos Oliveira</span>
                    </div>
                    <div className='card-ex'>
                        <img className='img-pessoa' src={pessoa1} alt="" />
                        <p>“Como voluntário, aprendi que o verdadeiro valor está na generosidade e na capacidade de oferecer apoio incondicional àqueles que precisam. Desde então, tenho experimentado uma jornada de autodescoberta e serviço dedicado.”</p>
                        <span className='bold'>- Isabella Almeida</span>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default TelaVoluntariado;