import React from 'react';


const ButtonReset = ({color, text, onClick}) => {
    return (
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
}

export default ButtonReset;