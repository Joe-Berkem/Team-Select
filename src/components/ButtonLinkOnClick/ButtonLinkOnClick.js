import React from 'react';
import { Link } from "react-router-dom";


const ButtonLinkOnClick = ({link, color, text, onClick}) => (
    <div className="button-container">
        <Link to={link}>
            <button 
                className="button"
                onClick={onClick}
                style={{backgroundColor: color}}
            >
                {text}
                
            </button>
        </Link>
    </div>

);

export default ButtonLinkOnClick;