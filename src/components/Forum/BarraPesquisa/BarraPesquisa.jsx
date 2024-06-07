import React from 'react'
import "./BarraPesquisa.css";
import Search from '../../../assets/search.svg'

function BarraPesquisa(){
    return(
        <>
        <div className="search-container">
            <input className="search-input" type="text" placeholder="Pesquisar..."/>
          </div>
        </>
    )  
}

export default BarraPesquisa;