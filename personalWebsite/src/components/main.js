import React from 'react';
import LandingPage from './landingpage';
import {Switch, Route} from 'react-router-dom';
import AboutMe from './aboutme';
import Project from './project';
import Contact from './contact';
import Resume from './resume';

const Main = () => (
    <Switch> 
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutMe" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/project" component={Project} />
      <Route path="/resume" component={Resume} />
      <Route path="/Landing" component={LandingPage} />
    </Switch> 
)

export default Main;