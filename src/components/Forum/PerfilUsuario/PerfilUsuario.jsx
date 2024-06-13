import React from 'react'
import "./PerfilUsuario.css";
import imgPessoa from "../../../assets/people1.png"

function PerfilUsuario() {
    return (
        <>
            <div className='full-div'>
                <div className='perfil-usuario'>
                    <div>
                        <img className='moldura-foto' src={imgPessoa} alt="" />
                    </div>
                    <div className='bio-usuario'>
                        <h2>Isabella Almeida</h2>
                        <p>Sou voluntária há 5 anos, desde então tenho dedicado meu tempo e energia para causas sociais que acredito. Sou apaixonada por tudo  isso!</p>
                    </div>
                    <button className='button-perfil'>Mensagens diretas</button>
                    <button className='button-perfil'>Minhas Postagens</button>
                </div>
                <div class="notification-box">
                    <h2>Notificações</h2>
                    <span className='sub-title'>Campanhas em destaque</span>
                    <div class="notification-item">
                        <span class="dot"></span>
                        <div class="content">
                            <p>
                                Mutirão de limpeza: <span className='notification'>Nós do bem</span>
                            </p>

                        </div>
                    </div>
                    <div class="notification-item">
                        <span class="dot"></span>
                        <div class="content">
                            <p>
                                Reforço escolar: <span className='notification'>Nós do bem</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="notification-box">
                    <h2>Vagas</h2>
                    <span className='sub-title'>Vagas em destaque</span>
                    <div class="notification-item">
                        <span class="dot"></span>
                        <div class="content">
                            <p>
                                Cozinheiro: <span className='notification'>Nós do bem</span>
                            </p>

                        </div>
                    </div>
                    <div class="notification-item">
                        <span class="dot"></span>
                        <div class="content">
                            <p>
                                Cozinheiro: <span className='notification'>Nós do bem</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PerfilUsuario;

