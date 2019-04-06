import React from 'react';
import { Link } from "react-router-dom";

const Button = ({link, color, text}) => (
    <div className="button-container">
        <Link to={link}>
            <button 
                className="button"
                style={{backgroundColor: color}}
            >{text}
            </button>
        </Link>
    </div>
);

export default Button;
