import React from 'react';
import Banner from '../../components/Banner/Banner';
import TeamForm1 from '../../components/TeamForm/TeamForm1';
import TeamForm2 from '../../components/TeamForm/TeamForm2';

const TeamCustomisationPage = () => (

    <>
    <section className="player-input-page-wrapper flex-row">
        
        <div className="container">
            <Banner
                text="Team 1 Name"
            />
            <TeamForm1/>

           
        </div>

        <div className="container">

            <Banner
                text="Team 2 Name"
            />
            <TeamForm2/>

        </div>

    </section>
    </>
 
);

export default TeamCustomisationPage;