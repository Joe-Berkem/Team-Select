import React from 'react';

const Button = ({color, text}) => (
    <div className="button-container">
            <button 
                className="button"
                style={{backgroundColor: color}}
                type="submit"
            >{text}
            </button>
    </div>
);

export default Button;