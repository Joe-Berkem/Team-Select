import React from 'react';

const TeamSize = ({ 
    teamSize, 
    handleIncrement, 
    handleDecrement,
    players
    
}) => (

    <div className="team-size-container">
        <p className="team-size-text">{ teamSize } a side</p>
        <div>
            {teamSize <= 3 || players.length === teamSize * 2 ? null:
            <button
                className="team-size-button" 
                onClick={handleDecrement} 
            >-
            </button>
            }

            {teamSize >= 11 ? null: 

            <button 
                onClick={handleIncrement} 
                className="team-size-button"
            >+
            </button>
            }
        </div>
    </div>
)

export default TeamSize;