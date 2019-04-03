import React from 'react';
import Banner from '../../components/Banner/Banner';

const FinalTeamsPage = ({players, teamSize}) => {

    function splitTeams(array, teamSize){
        let index = 0;
        let arrayLength = array.length;
        let tempArray = [];
        
        for (index = 0; index < arrayLength; index += teamSize) {
            let myChunk = array.slice(index, index+teamSize);
            // add other conditionals 
            tempArray.push(myChunk);
        }
        return tempArray;
    }
    let result = splitTeams(players, teamSize);
    
    console.log(result);

    return (
    <>
        <section className="player-input-page-wrapper flex-row">
            
            <div className="pitch-container1">
                <Banner
                    text="Team 1"
                />
                
            
            </div>

            <div className="pitch-container2">

                <Banner
                    text="Team 2"
                />
            
            </div>

        </section>
    </>
    )
};

export default FinalTeamsPage;