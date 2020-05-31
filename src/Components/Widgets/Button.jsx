import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'


const Button = ({title, onClick, color}) => {
    return (
        <button style={{backgroundColor: color}}
            className = 'button'
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
