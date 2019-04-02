import React from 'react';
import NoStar from '../../components/Stars/NoStar';
import Star1 from '../../components/Stars/Star1';
import Star2 from '../../components/Stars/Star2';
import Star3 from '../../components/Stars/Star3';

const ListItem = ({
    name, skill, position
}) => (

    <div>

        <label>Name</label>  
        <p>{name}</p>


        <label>Skill</label> 

        {(() => {
            switch (skill) {
                case "3":   return <Star3/>;
                case "2": return <Star2/>;
                case "1":  return <Star1/>;
                default:     return <NoStar/>;
            }
        })()}


    </div>


)

export default ListItem;

// {/* 

//         {{
//         if ({skill} === 3 ) {
//         return <Star3/>
//         }

//         if (skill === 2 ) {
//         return <Star2/>
//         }

//         if (skill === 1 ) {
//         return <Star1/>
//         }

//         else {
//             return <NoStar/>
//         } */}
        