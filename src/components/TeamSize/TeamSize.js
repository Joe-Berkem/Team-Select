import React from 'react';

const TeamSize = ({ 
    teamSize, 
    handleIncrement, 
    handleDecrement
    
}) => (

    <div>
        <p>{ teamSize } a side</p>
        
        {teamSize <= 3 ? null:
        <button 
        onClick={handleDecrement} 
        >-
        </button>
        }

        {teamSize >= 11 ? null: 

        <button 
        onClick={handleIncrement} 
        >+
        </button>
        }
    </div>
)

export default TeamSize;