import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/';
import LandingPage from '../LandingPage/LandingPage';
import PlayerInputPage from '../PlayerInputPage/';
import TeamCustomisationPage from '../TeamCustomisationPage/';
import FinalTeamsPage from '../FinalTeamsPage/';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="wrapper">
          <Header/>
          <Switch>
            <div className="screenContainer">
              <Route exact path="/" component={ LandingPage }/>
              <Route exact path="/player-input" component={ PlayerInputPage }/>
              <Route exact path="/team-customisation" component={ TeamCustomisationPage }/>
              <Route exact path="/final-teams" component={ FinalTeamsPage }/>
            </div>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
