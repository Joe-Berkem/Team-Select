import React from 'react';
import ListIcon from '../../assets/list-icon.svg';
import Customise from '../../assets/customise-icon.svg';
import Download from '../../assets/download-icon.svg';
import Button from '../../components/Button/Button';

const LandingPage = () => (

    <>
        <section className="landing-page-wrapper">
            <div className="container">
                <div className="lp-detail">
                    <h3>The football team selection app</h3>
                </div>

                <div className="flex-row lp-detail">
                    <img className="icon" src={ListIcon} alt="list-icon"/>
                    <p>List all the players taking part</p>
                </div>
                    
                <div className="flex-row lp-detail">
                    <img className="icon" src={Customise} alt="list-icon"/>
                    <p>Generate & Customise your teams</p>
                </div>

                <div className="flex-row lp-detail">
                    <img className="icon" src={Download} alt="list-icon"/>
                    <p>Download & share</p>
                </div>

                <Button
                    link="/player-input"
                    color="#00ff87"
                    text="Get Started"
                />
             
            </div>
        </section>
    </>
);

export default LandingPage;