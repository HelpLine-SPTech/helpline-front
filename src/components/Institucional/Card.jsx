import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo-alternative.svg'
import "./Card.css";
import checkIcon from '../../assets/checkIcon.png'

function Card({ title, features, buttonText }) {
    return (
      <div className="card font-poppins">
        <h2>{title}</h2>
        <ul className="card-features">
          {features.map((feature, index) => (
            <li key={index} className="card-feature">
              <img src={checkIcon} alt="check" className="check-icon" />
              {feature}
            </li>
          ))}
        </ul>
        <button className="card-button font-poppins bold">{buttonText}</button>
      </div>
    );
  }
  
  export default Card;