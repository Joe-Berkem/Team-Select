import React from 'react';
import Banner from '../../components/Banner/Banner';
import TeamForm from '../../components/TeamForm/TeamForm';

const TeamCustomisationPage = () => (

    <>
    <section className="player-input-page-wrapper flex-row">
        
        <div className="container">
            <Banner
                text="Team 1 Name"
            />
            <TeamForm/>

           
        </div>

        <div className="container">

            <Banner
                text="Team 2 Name"
            />

        </div>

    </section>
    </>
 
);

export default TeamCustomisationPage;