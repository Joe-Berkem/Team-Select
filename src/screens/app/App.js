import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import PlayerInputPage from '../PlayerInputPage/PlayerInputPage';
import TeamCustomisationPage from '../TeamCustomisationPage/TeamCustomisationPage';
import FinalTeamsPage from '../FinalTeamsPage/FinalTeamsPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={ LandingPage }/>
          <Route exact path="/player-input" component={ PlayerInputPage }/>
          <Route exact path="/team-customisation" component={ TeamCustomisationPage }/>
          <Route exact path="/final-teams" component={ FinalTeamsPage }/>
        </Switch>
      </Router>
    );
  }
}

export default App;