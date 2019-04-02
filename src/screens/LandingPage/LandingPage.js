import React from 'react';
import ListIcon from '../../assets/list-icon.svg';
import Customise from '../../assets/customise-icon.svg';
import Download from '../../assets/download-icon.svg';
import ButtonLink from '../../components/Button/ButtonLink';
import purpleLogo from '../../assets/logo-purple.svg';

const LandingPage = () => (

    <>
        <section className="landing-page-wrapper">
            <div className="container">
                <div className="lp-detail intro">
                    <img className="logo-lp" src={purpleLogo} alt="Team Select Logo"/>
                    <h3>The football team selection app</h3>
                </div>

                <div className="flex-row lp-detail">
                    <img className="icon" src={ListIcon} alt="list-icon"/>
                    <p>List all the players taking part</p>
                </div>
                    
                <div className="flex-row lp-detail">
                    <img className="icon" src={Customise} alt="list-icon"/>
                    <p>Generate & customise your teams</p>
                </div>

                <div className="flex-row lp-detail">
                    <img className="icon" src={Download} alt="list-icon"/>
                    <p>Download & share with friends</p>
                </div>

                <ButtonLink
                    link="/player-input"
                    color="#e90052"
                    text="Get Started"
                />
             
            </div>
        </section>
    </>
);

export default LandingPage;