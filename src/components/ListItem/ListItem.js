import React from 'react';
import NoStar from '../../components/Stars/NoStar';
import Star1 from '../../components/Stars/Star1';
import Star2 from '../../components/Stars/Star2';
import Star3 from '../../components/Stars/Star3';

const ListItem = ({
    name, skill, position
}) => (

    <div className="list-item-wrapper">
        <div className ="list-item-column">
            <label className="list-label">Name</label>  
            <p>{name}</p>
        </div>

        <div className ="list-item-column">
            <label className="list-label">Skill</label> 
            {(() => {
                switch (skill) {
                    case "3":   return <Star3/>;
                    case "2": return <Star2/>;
                    case "1":  return <Star1/>;
                    default:     return <NoStar/>;
                }
            })()}
        </div>

        <div className ="list-item-column">
            <label className="list-label">Position</label>
            <p>
                {(() => {
                    switch (position) {
                        case "3":   return "FWD";
                        case "2": return "MID";
                        case "1":  return "DEF";
                        default:     return "GK";
                    }
                })()}
            </p>
        </div>


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
        