import React, { Component } from 'react';
import Start from './Start';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Game from './Game';
import End from './End';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/end" component={End} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
