import React from 'react';

const Position = ({text, color}) => (
    <div 
        className="position-square"
        style={{backgroundColor: color}}
    >
        <p>{text}</p>
    </div>

);

export default Position;