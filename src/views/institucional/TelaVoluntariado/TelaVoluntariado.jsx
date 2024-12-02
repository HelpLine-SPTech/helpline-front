import React from 'react';
import "./TelaVoluntariado.css";
import imgBordaVerde from "../../../assets/retangulo-verde.svg";
import imgBordaLaranja from "../../../assets/retangulo-laranja.svg";
import Navbar from "../../../components/Institucional/NavBarInstitucional/NavBar";
import pessoa1 from "../../../assets/people1.png";
import Footer from '../../../components/Footer/Footer';
import GroupSelo1 from "../../../assets/selos1.jpeg";
import GroupSelo2 from "../../../assets/selos2.jpeg";


function TelaVoluntariado() {
    return (
        <>
            <Navbar />
            <section className='section-voluntariado view-80 font-poppins'>
                <div className='div-voluntario-if d-flex flex-center'>
                    <div className='div-text flex-gap-24'>
                        <h1>Seja um agente da transformação</h1>
                        <p>Junte-se a nós e faça a diferença em sua comunidade! Seja parte dessa rede de solidariedade, contribuindo para causas importantes e fortalecendo laços comunitários. Cadastre-se como voluntário hoje e impacte positivamente o mundo ao seu redor!</p>
                    </div>
                    <div className='div-img'>
                        <img className='img-voluntario' src={GroupSelo1} alt="" />
                    </div>
                </div>
            </section>

            <div className='bar-leftH'>
                <img className='img-verde' src={imgBordaVerde} alt="" />
            </div>

            <section className='causas view-80 font-poppins'>
            <h2 className='font-poppins'>Como se tornar um voluntário</h2>
                <div className='container-card-causa d-flex'>
                
                    <div className='card-causa '>
                        <div className='card-number'>1</div>
                        <div className='card-information'>
                            <span className='bold'>Cadastre-se no site</span>
                            <p>Cadastre-se no nosso site, e encontre a ONG que mais se encaixa com você e com seus propósitos.</p>
                        </div>
                    </div>
                    <div className='card-causa'>
                        <div className='card-number'>2</div>
                        <div className='card-information'>
                            <span  className='bold'>Procure ONG’s</span>
                            <p>Com seu login, acesse seu fórum, onde irá encontrar ongs e amigos, para se conectar e postar suas ações.</p>
                        </div>
                    </div>
                    <div className='card-causa'>
                        <div className='card-number'>3</div>
                        <div className='card-information'>
                            <span  className='bold'>Participe de Campanhas</span>
                            <p>Através de posts, você conseguirá entrar em contato com o gestor da ONG que abriu uma campanha e fechar diretamente com ele.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='bar-rightH'>
                <img className='img-laranja' src={imgBordaLaranja} alt="" />
            </div>

            <section className='causas2 view-90 font-poppins' style={{height: 'fit-content'}}>
                <h2 className='font-poppins'>Conheça a experiência dos nossos voluntários!</h2>
                <div className='container-experience d-flex justify-space-between flex-center flex-gap-32'>
                    <div className='card-ex'>
                        <p className='container-cards'>“Adorei a experiência na plataforma! Agora posso ver exatamente para onde vai minha doação, com fotos e relatos incríveis. É bom saber que estou ajudando de verdade!”</p>
                        <span className='bold'>- Mariana Oliveira</span>
                    </div>
                    <div className='card-ex'>
                        <p className='container-cards'>“A plataforma é incrível! Consegui me conectar com uma ONG de forma rápida e prática, e já estou vendo o impacto do meu trabalho como voluntário.”</p>
                        <span className='bold'>- Lucas Fernandes</span>
                    </div>
                    <div className='card-ex'>
                        <p className='container-cards'>“Transparência total! Fiquei impressionado com a facilidade de acompanhar o progresso das campanhas e saber que minha ajuda faz diferença.”</p>
                        <span className='bold'>- Ana Costa</span>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default TelaVoluntariado;
