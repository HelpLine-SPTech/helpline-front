import React from 'react'
import "./Post.css";
import ButtonSubscribe from '../ButtonSubscribe/ButtonSubscribe';
import ButtonContact from '../ButtonContact/ButtonContact';
import ImgUsuario from '../../../assets/people1.png'

function Post(){
    return(
        <>
        <div className='post'>
            <div className='side-right'>
                <div className='foto-perfil'>
                <img src={ImgUsuario} alt="foto-usuario" />
                </div>
                <ButtonSubscribe/>
                <ButtonContact/>
            </div>
            <div className='side-left'>
                <span className='nome-usuario'>Nós do bem</span>
                <p>
                <span>Vaga:</span> Voluntário para Cuidados de Animais Abandonados <br />
                <span> Endereço: </span> Abrigo de Animais XYZ, Estrada dos Bichinhos <br />
                <span> Descrição da vaga: </span> 
                Auxiliar na alimentação, higiene e exercícios dos animais residentes no abrigo.
                Participar de atividades de socialização e enriquecimento ambiental para garantir o bem-estar dos animais. <br />
                <span> Quantidade de vagas: </span> 2 <br />
                <span> Horário: </span>  10h00 às 14h00 <br />
                <span> Dias da semana: </span> Terça-feira e Quinta-feira
                </p>
            </div>
        </div>
        </>
    )  
}

export default Post;