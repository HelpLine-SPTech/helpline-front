import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import "./Button.css";

function Button({ buttonText, onClick }){
    return(
        <>
            <button 
                className='font-league bold custom-button'
                onClick={onClick}
            >
                {buttonText}
            </button>
        </>
    )  
}

export default Button