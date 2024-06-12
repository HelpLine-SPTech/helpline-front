import React from "react";
// import PropTypes from 'prop-types'
// import { Link, useLocation } from 'react-router-dom'
import "./Button.css";

function Button(buttonText) {
  return (
    <>
      <button className="botao-geral font-league bold">
        {buttonText}
      </button>
    </>
  );
}

export default Button;
