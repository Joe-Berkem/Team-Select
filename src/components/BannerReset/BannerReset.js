import React from 'react';

const BannerReset = ({text, colour, onClick}) => (
    <div className="banner-reset-container"
        style={{backgroundColor: colour}}
    >
        <h4>{text}</h4>
        <button
        onClick={onClick}
        >Reset</button>
    </div>

);

export default BannerReset;