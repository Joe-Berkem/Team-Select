import React from 'react';
import Banner from '../../components/Banner/Banner';

const FinalTeamsPage = () => (

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
 
);

export default FinalTeamsPage;