import React, { useEffect, useState } from 'react'
import "./PerfilForum.css";
import { Link } from 'react-router-dom'
import NavbarV from "../../components/Institucional/NavBarVoluntario/NavBarVoluntario"
import Footer from '../../components/Footer/Footer';
import Pessoa1 from '../../assets/people1.png'
import Seguidores from '../../assets/seguidores.svg'
import Instagram from '../../assets/instagram.svg'
import Whatsapp from '../../assets/whatsapp.svg'
import Selo1 from '../../assets/selo-aconchego-partilhado.svg'
import Selo2 from '../../assets/selo-nutrir-esperança.svg'
import Selo3 from '../../assets/selo-enriqueca-infancias.svg'
import Ong from '../../assets/ong.png'

function PerfilForum() {
    return (
        <>
            <NavbarV />
            <section className='font-poppins d-flex flex-center'>
                <div className='perfil'>
                    <div className='capa-perfil'>
                        <div className="search-container-perfil">
                            <input className="search-input-perfil" type="text" placeholder="Pesquisar..." />
                        </div>
                        <img className='foto-perfil' src={Pessoa1} alt="" />
                    </div>
                    <div className='information-perfil-full'>
                        <div className='information-perfil-right'>
                            <div className='bio-information'>
                                <div>
                                <h3>Isabella Almeida</h3>
                                <p>45 anos</p>
                                </div>
                                <p>Sou voluntária há 5 anos, desde então tenho dedicado meu tempo e energia para causas sociais que acredito. Sou apaixonada por tudo  isso!</p>
                                <div className='bio-pessoal'>
                                    <img className='icon-perfil' src={Seguidores} alt="" />
                                    <p>220 seguidores</p>
                                </div>
                                <div className='bio-pessoal'>
                                    <img className='icon-perfil' src={Whatsapp} alt="" />
                                    <p>11 99367-1601</p>
                                </div>
                                <div className='bio-pessoal'>
                                    <img className='icon-perfil' src={Seguidores} alt="" />
                                    <p>isa_almeida</p>
                                </div>
                            </div>
                            <div className='competencias'>
                                <h3>Competências</h3>
                                <div className='competencias-information'>
                                    <div className='dot'></div>
                                    <p>Comunicação escrita</p>
                                </div>
                                <div className='competencias-information'>
                                    <div className='dot'></div>
                                    <p>Habilidade em cozinhar</p>
                                </div>
                                <div className='competencias-information'>
                                    <div className='dot'></div>
                                    <p>Inglês básico</p>
                                </div>
                            </div>
                            <div className='publicacoes-perfil'>
                                <h3>Publicações</h3>
                                <div className='post-individual'>
                                    <img className='post-img-perfil' src={Pessoa1} alt="" />
                                    <p>Que legal ver outras pessoas se envolvendo com trabalho voluntário também! É inspirador saber que juntos podemos...</p>
                                </div>
                                <div className='post-individual'>
                                    <img className='post-img-perfil' src={Pessoa1} alt="" />
                                    <p>Que legal ver outras pessoas se envolvendo com trabalho voluntário também! É inspirador saber que juntos podemos...</p>
                                </div>
                                <div className='post-individual'>
                                    <img className='post-img-perfil' src={Pessoa1} alt="" />
                                    <p>Que legal ver outras pessoas se envolvendo com trabalho voluntário também! É inspirador saber que juntos podemos...</p>
                                </div>
                            </div>
                        </div>
                        <div className='information-perfil-left'>
                            <h3>Selos</h3>
                            <div className='secao-selo'>
                                <img className='selo-perfil' src={Selo3} alt="" />
                                <img className='selo-perfil' src={Selo1} alt="" />
                                <img className='selo-perfil' src={Selo2} alt="" />
                            </div>
                            <div className='secao-ong'>
                                <h3>ONG's sugeridas</h3>
                                <div className='ong-sugerida-secao'>
                                    <div className='line-ong-sugerida'>
                                        <img className='img-ong-sugerida' src={Ong} alt="" />
                                        <p className='nome-ong-sugerida'>Bem da Madrugada</p>
                                    </div>
                                    <div className='line-ong-sugerida'>
                                        <img className='img-ong-sugerida' src={Ong} alt="" />
                                        <p className='nome-ong-sugerida'>Bem da Madrugada</p>
                                    </div>
                                    <div className='line-ong-sugerida'>
                                        <img className='img-ong-sugerida' src={Ong} alt="" />
                                        <p className='nome-ong-sugerida'>Bem da Madrugada</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default PerfilForum;