import React from 'react'
import './Notify.css'
import perfil from "../../assets/image.png"

function Notify() {
    return (
        <>
            <div className='Componente-Notify'>
            <div className='side-right'>
                    <div className='foto-perfil'>
                        <img className='foto-usuario' src={perfil} alt="foto-usuario" />
                    </div>
                </div>

                <div className='side-left'>
                    <span className='nome-usuario'>Nome do usuário</span>
                    <p className="post-paragrafo">Marcou você em uma publicação
                    </p>
                </div>
            </div>
        </>
    )
}

export default Notify