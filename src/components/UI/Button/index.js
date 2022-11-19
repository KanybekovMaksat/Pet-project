import React from 'react';
import './Button.scss'

const Button = ({ type, children}) => {
    return (
        <a className={`button ${
            (type ==='cart' && 'cart') || 
            (type === 'send' && 'send') ||
            (type === 'call' && "call") ||
            (type === 'card' && 'card') ||
            (type ===  'slider' && 'slider')
        }`}
        >{children}</a>
    );
}

export default Button;