import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './LandingPage';

const Main = () => {
  <Switch>
    <Route exact path="/" component={LandingPage}/>
  </Switch>
}

export default Main;