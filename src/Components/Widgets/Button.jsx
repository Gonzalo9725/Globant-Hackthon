import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'


const Button = ({title, onClick, disabled, color}) => {
    return (
        <button 
            disabled={disabled}
            style={{backgroundColor: color}}
            className = 'buttonC'
            onClick = {onClick}>
            {title}
        </button>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.string
}

export default Button;
