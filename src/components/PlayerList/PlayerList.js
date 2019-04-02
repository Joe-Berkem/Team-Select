import React from 'react';

const PlayerList = ({
    list
}) => (

    <ul className="listItemUl">
    { list.map(item => (
        <li>
            <p key={item}>{ item.name }</p>
            <p key={item}>{ item.skill}</p>
            <p key={item}>{ item.position }</p>
        </li>
    ))}        
    </ul>
)

export default PlayerList;
