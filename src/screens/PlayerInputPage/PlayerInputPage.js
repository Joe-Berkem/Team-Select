import React from 'react';
import Button from '../../components/Button/Button';
import Banner from '../../components/Banner/Banner';
import PlayerForm from '../../components/PlayerForm/PlayerForm';

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

            <Button
                link="/player-input"
                color="#00ff87"
                text="Get Started"
            />
         
        </div>




    </section>
</>

);

export default PlayerInputPage;