import React from "react";
import PropTypes from "prop-types";
import './Card.css';

function Card({ title, features, buttonText }) {
  return (
    <div className="card font-poppins">
      <h3 className="card-title">{title}</h3>
      <ul className="card-features">
        {features.map((feature, index) => (
          <li key={index} className="card-feature">{feature}</li>
        ))}
      </ul>
      <div className="card-button">{buttonText}</div> {/* Renderiza o botão/link */}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.element.isRequired, // Espera um componente JSX, como o Link
};

export default Card;
