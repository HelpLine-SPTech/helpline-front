import React from 'react'
import "./Card.css";
import checkIcon from '../../assets/checkIcon.png'

function Card({ title, features, buttonText }) {
    return (
      <div className="card font-poppins">
        <span className='bold'>{title}</span>
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