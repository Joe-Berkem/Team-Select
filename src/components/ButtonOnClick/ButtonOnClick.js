import React from 'react';


const Button = ({onClick, color, text}) => (
    <div className="button-container">
            <button 
                className="button"
                style={{backgroundColor: color}}
                onClick={onClick}
            >
                {text}
            </button>
    </div>

);

export default Button;