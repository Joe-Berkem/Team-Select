import React from 'react';
import Banner from '../../components/Banner/Banner';
import PlayerItem from '../../components/PlayerItem/PlayerItem'

const FinalTeamsPage = ({ players, teamSize, teamName1, teamName2, colour1, colour2, kit1, kit2 }) => {

    
    let sortPlayersSkills = ( array ) => {
    
        array.sort(function (a, b) {
            return a.skill - b.skill;
        }); 

        return array;
    }
    
    let ratings = sortPlayersSkills(players);

    console.log(ratings, "should be lowest to highest");


    let splitTeamsNew = ( array ) => {
        let index = 0;
        let arrayLength = array.length;
        let team1Array = [];
        let team2Array = [];
    
        for (index = 0; index < arrayLength; index += 1) {
            if (index % 2 === 0) {
                team1Array.push(array[index])
            }else{
                team2Array.push(array[index])
            }
        }
        return [team1Array, team2Array]
    }
    
    let teamsSplit = splitTeamsNew(ratings);

    console.log(teamsSplit,"should be split evenly");



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
    let result = splitTeams(ratings, teamSize);
    
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