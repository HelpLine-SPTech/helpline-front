import React, { useState } from "react";
import perfil from "../../assets/perfil.jpg"
import curtida from "../../assets/curtida.png"
import comentario from "../../assets/cometario.png"
import "./Post.css";

function Post() {
    return (
        <>
            <div className='post'>

                <div className='side-right'>
                    <div className='foto-perfil'>
                        <img className='foto-usuario' src={perfil} alt="foto-usuario" />
                    </div>
                </div>

                <div className='side-left'>
                    <span className='nome-usuario'>Nome do usuário</span>
                    <p className="post-paragrafo">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div class="bottom-right">
                    <button>
                        <img className='curtida' src={curtida} alt="botao-curtida" />
                    </button>
                    <button>
                        <img className='comentario' src={comentario} alt="botao-comentario" />
                    </button>
                </div>

            </div>
        </>
    );
}
export default Post;