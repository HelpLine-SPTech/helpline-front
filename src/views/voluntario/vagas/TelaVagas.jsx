import React, { useEffect, useState } from 'react'
import "./TelaVagas.css";
import { Link } from 'react-router-dom'
import NavbarV from "../../../components/Institucional/NavBarVoluntario/NavBarVoluntario"
import Footer from '../../../components/Footer/Footer';
import Post from '../../../components/Forum/Post/Post';
import PerfilUsuario from '../../../components/Forum/PerfilUsuario/PerfilUsuario';
import BarraPesquisa from '../../../components/Forum/BarraPesquisa/BarraPesquisa'

function TelaVagas() {
    return (
        <>
            <NavbarV/>
            <section className='font-poppins d-flex flex-center'>
                <div className='container-principal'>
                    <div className='container-right'>
                        <PerfilUsuario />
                    </div>
                    <div className='container-left'>
                        <div className='barra-pesquisa'>
                            <BarraPesquisa />
                        </div>
                        <div className='publicacoes'>
                            <Post/> 
                            <Post/> 
                            <Post/> 
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default TelaVagas;