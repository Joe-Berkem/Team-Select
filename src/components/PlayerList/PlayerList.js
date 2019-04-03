import React from 'react';
import ListItem from '../ListItem/ListItem'

const PlayerList = ({
    list
}) => (

    <ul className="list-item-ul">
    { list.map(item => (
        <ListItem
            key={item}
            name={item.name}
            skill={item.skill}
            position={item.position}
        />
    ))}        
    </ul>
)

export default PlayerList;
