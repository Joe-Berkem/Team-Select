import React from 'react';
import ButtonLink from '../../components/Button/ButtonLink';
import purpleLogo from '../../assets/logo-purple.svg';

const FourOhFour = () => (

    <>
        <section className="landing-page-wrapper">
            <div className="container">

                <div className="lp-detail intro">
                    <img className="logo-lp" src={purpleLogo} alt="Team Select Logo"/>
                    <h3>Whoops - 404 page not found</h3>
                </div>

                <ButtonLink
                    link="/player-input"
                    color="#e90052"
                    text="Return to homepage"
                />
             
            </div>
        </section>
    </>
);

export default FourOhFour;