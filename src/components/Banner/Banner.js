import React from 'react';

const Banner = ({text, colour}) => (
    <div 
        className="banner-container"
        style={{backgroundColor: colour}}>
        <h4>{text}</h4>
    </div>
);

export default Banner;