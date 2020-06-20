import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Landing from './LandingPage';
import About from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';



const Main = () => (
  <Switch>
    <Route path="/" component={ Landing } />
    <Route path="/About" component={ About } />
    <Route path="/Contact" component={ Contact } />
    <Route path="/Projects" component={ Projects } />
    <Route path="/Resume" component={ Resume } />
  </Switch>
)

export default Main;