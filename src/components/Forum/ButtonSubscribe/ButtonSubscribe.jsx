import React from 'react'
import "./ButtonSubscribe.css";
import api from '../../../api/helplineApi';

function ButtonSubscribe(){
    function cadastrarVaga(){
        api.post('/')
        console.log('Vaga cadastrada com sucesso!')

    }

    return(
        <>
            <button className='button-subscribe' onClick={cadastrarVaga()}>Inscrever-se</button>
        </>
    )
}

export default ButtonSubscribe;