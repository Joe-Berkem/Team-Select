import React from 'react';
import Banner from '../../components/Banner/Banner';
import TeamForm1 from '../../components/TeamForm/TeamForm1';
import TeamForm2 from '../../components/TeamForm/TeamForm2';
import ButtonReset from '../../components/ButtonReset/ButtonReset';
import ButtonLink from '../../components/Button/ButtonLink';

const TeamCustomisationPage = ({teamName1, teamName2, resetTeams}) => (

    <>
    <section className="player-input-page-wrapper flex-row">
        
        <div className="container">
            <Banner
                text="Team 1 Name"
            />
            <TeamForm1/>

            {teamName1 && teamName2 ?
            <ButtonReset
                color="#ff0000"
                text="Reset Teams"
                onClick={resetTeams}
            />     
            : null
            }

           
        </div>

        <div className="container">

            <Banner
                text="Team 2 Name"
            />
            <TeamForm2/>

            {teamName1 && teamName2 ?
            <ButtonLink
                link="/final-teams"
                color="#eaff04"
                text="Generate Teams"
            />     
            : null
            }

        </div>

    </section>
    </>
 
);

export default TeamCustomisationPage;