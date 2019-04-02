import React from 'react';

const PlayerList = ({
    list
}) => (

    <ul className="listItemUl">
    { list.map(index => (
        <li>
            <p className="listItemText">{ index }</p>
        </li>
    ))}        
    </ul>
)

export default PlayerList;
