import React from 'react';
import Banner from '../../components/Banner/Banner';
import PlayerForm from '../../components/PlayerForm/';
import PlayerList from '../../components/PlayerList/';
import TeamSize from '../../components/TeamSize/';
import ButtonLink from '../../components/Button/ButtonLink';

const PlayerInputPage = ({teamSize, players}) => (

    <>
    <section className="player-input-page-wrapper flex-row">
        
        <div className="container">
            <Banner
                text="Player Name"
            />
            <PlayerForm/>
           
        </div>

        <div className="container">

            <Banner
                text="Team Size"
            />

            <TeamSize/>

            {players.length < teamSize * 2 ?
            <ButtonLink
                        link="/team-customisation"
                        color="#e90052"
                        text="Customise Teams"
            />
            : null
            }

            <Banner
                text="Player List"
            />

            <PlayerList/>
         
        </div>

    </section>
</>

);

export default PlayerInputPage;