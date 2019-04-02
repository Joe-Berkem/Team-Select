import React from 'react';
import ListItem from '../ListItem/ListItem'

const PlayerList = ({
    list
}) => (

    <ul className="listItemUl">
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
