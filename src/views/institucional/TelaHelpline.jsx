import React, { useEffect, useState } from 'react'
import "./TelaHelpline.css";
import imgBordaVerde from "../../assets/retangulo-verde.svg"
import imgBordaLaranja from "../../assets/retangulo-laranja.svg"
import Navbar from "../../components/Institucional/NavBarInstitucional/NavBar"
import Card from "../../components/Institucional/Card"
import imgDoacao from "../../assets/img1-doacao.svg"
import imgCoracao from "../../assets/img2-tela-helpline.svg"

function TelaHelpline(){
    return(
        <>
        <Navbar />
        <section className='view-80 font-poppins d-flex flex-center'>
                <div className='d-flex justify-space-between flex-center flex-gap-32'>
                    <div className='div-texto1 flex-gap-24'>
                        <h1>HelpLine: Uma ponte para o bem</h1>
                        <p>A Helpline, originada de um projeto acadêmico na SPTECH, cresceu para ser uma ponte essencial entre ONGs e voluntários/doadores. Com base na solidariedade, nossos fundadores uniram-se para conectar quem quer ajudar com quem mais precisa.</p>
                    </div>
                    <div className='div-img1'>
                        <img className='img-doacao' src={imgDoacao} alt="quebra-cabeca" />
                    </div>
                </div>
            </section>
            <div className='bar-left'><img className='img-verde' src={imgBordaVerde} alt="" /></div>
            <section className="section2 view-80 font-poppins d-flex">
                <div className='d-flex justify-space-between flex-center'>
                    <div className='div-img-coracao'>
                        <img className='img-coracao' src={imgCoracao} alt="quebra-cabeca" />
                    </div>
                    <div className='div-texto2 flex-gap-24'>
                        <h1>Conectando corações generosos</h1>
                        <p>A missão da Helpline é simples, mas poderosa: conectar corações generosos para fazer o bem. Ao oferecer uma plataforma acessível e intuitiva, a Helpline facilita o processo de encontrar oportunidades de voluntariado e doação, permitindo que os indivíduos contribuam para causas que são importantes para eles. Com cada conexão feita, a Helpline fortalece os laços comunitários e promove um espírito de solidariedade.</p>
                    </div>
                </div>
            </section>
            <div className='bar-right'><img className='img-laranja' src={imgBordaLaranja} alt="" /></div>
            <section className='causas view-90 font-poppins'>
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
        </>
    )
}


export default TelaHelpline;

