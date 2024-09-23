import React from "react";
import "./BarraPesquisa.css";

function BarraPesquisa() {
  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Pesquisar..."
        />
      </div>
    </>
  );
}

export default BarraPesquisa;
