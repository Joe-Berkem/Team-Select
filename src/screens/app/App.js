import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
      <h1 className="Header">Hello World</h1>
      </Router>
    );
  }
}

export default App;
