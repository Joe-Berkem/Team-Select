import React from 'react';
import ButtonLink from '../../components/Button/ButtonLink';
import Banner from '../../components/Banner/Banner';
import PlayerForm from '../../components/PlayerForm/';
import PlayerList from '../../components/PlayerList/';

const PlayerInputPage = () => (

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
                text="Player List"
            />

            <PlayerList/>

            <ButtonLink
                link="/player-input"
                color="#00ff87"
                text="Get Started"
            />
         
        </div>

    </section>
</>

);

export default PlayerInputPage;