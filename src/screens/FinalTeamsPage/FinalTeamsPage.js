import React from 'react';
import Banner from '../../components/Banner/Banner';
import PlayerItem from '../../components/PlayerItem/PlayerItem'

const FinalTeamsPage = ({ players, teamSize, teamName1, teamName2, colour1, colour2, kit1, kit2 }) => {


    // let splitTeamsNew = ( array ) => {
    //     console.log(array, "array passed to splitnewfunction");
    //     let index = 0;
    //     let team1Array = [];
    //     let team2Array = [];
    
    //     for (index = 0; index < array.Length; index += 1) {
    //         if (index % 2 === 0) {
    //             team1Array.push(array[index])
    //             console.log(team1Array, "after push")
    //         }else{
    //             team2Array.push(array[index])
    //             console.log(team2Array, "after push")
    //         }
    //     }
    //     console.log(team1Array, "team 1 at end of split")
    //     console.log(team2Array, "team 2 at end of split")
    //     return [team1Array, team2Array]
        
    // }

    // let playersCopy = players;

    // let result = splitTeamsNew(playersCopy);
    // console.log(result, "after being given players")




    function splitTeams(array, teamSize){
        let index = 0;
        let arrayLength = array.length;
        let tempArray = [];

        for (index = 0; index < arrayLength; index += teamSize) {
            let myChunk = array.slice(index, index+teamSize);
            tempArray.push(myChunk);
        }
        return tempArray;
    }
    let result = splitTeams(players, teamSize);
    
    console.log(result, "orignal split function")

    return (
    <>
        <section className="player-input-page-wrapper flex-row">
            
            <div className="pitch-container1">
                <Banner
                    text={teamName1}
                    colour={colour1}
                />

                <div className="player-item-container">
                    { result[0].map(item => (
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
                    { result[1].map(item => (
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