import React from 'react';
import Banner from '../../components/Banner/Banner';
import PlayerForm from '../../components/PlayerForm/';
import PlayerList from '../../components/PlayerList/';
import TeamSize from '../../components/TeamSize/';

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
                text="Team Size"
            />

            <TeamSize/>

            <Banner
                text="Player List"
            />

            <PlayerList/>
         
        </div>

    </section>
</>

);

export default PlayerInputPage;