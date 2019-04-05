import React from 'react';
import Banner from '../../components/Banner/Banner';
import PlayerItem from '../../components/PlayerItem/PlayerItem'

const FinalTeamsPage = ({ players, teamName1, teamName2, colour1, colour2, kit1, kit2 }) => {


    function splitTeamsNew(array) {
        let index = 0;
        let team1Array = [];
        let team2Array = [];
    
        for (index = 0; index < array.length; index += 1) {
            if (index % 2 === 0) {
                team1Array.push(array[index])
            } else {
                team2Array.push(array[index])
            }
        }
        return [team1Array, team2Array]
    }

    let playersCopy = players;

    let newResult = splitTeamsNew(playersCopy);
   

    return (
    <>
        <section className="player-input-page-wrapper flex-row">
            
            <div className="pitch-container1">
                <Banner
                    text={teamName1}
                    colour={colour1}
                />

                <div className="player-item-container">
                    { newResult[0].map(item => (
                        <PlayerItem
                            key={item}
                            name={item.name}
                            skill={item.skill}
                            position={item.position}
                            colour={colour1}
                            kit={kit1}
                        />
                    ))}   
                </div>     
              
            </div>

            <div className="pitch-container2">

                <Banner
                    text={teamName2}
                    colour={colour2}
                />

                <div className="player-item-container">
                    { newResult[1].map(item => (
                        <PlayerItem
                            key={item}
                            name={item.name}
                            skill={item.skill}
                            position={item.position}
                            colour={colour2}
                            kit={kit2}
                        />
                    ))} 
                </div>        
            
            </div>

        </section>
    </>
    )
};

export default FinalTeamsPage;