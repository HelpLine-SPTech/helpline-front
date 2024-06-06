import React, { useEffect, useState } from 'react'
import "./TelaVagas.css";
import {Link} from 'react-router-dom'
import NavbarV from "../../../components/Institucional/NavBarVoluntario/NavBarVoluntario"
import Footer from '../../../components/Footer/Footer';
import Post from '../../../components/Forum/Post/Post';

function TelaVagas(){
    return(
        <>
        <NavbarV/>
        <section className='view-80 font-poppins d-flex flex-center'>
            <div>
                <div className='perfil-usuario'>

                </div>
                <div className='barra-pesquisa'>

                </div>
                <div className='publicacoes'>
                    <Post/>
                </div>
            </div>
        </section>
        </>
    )
}

export default TelaVagas;