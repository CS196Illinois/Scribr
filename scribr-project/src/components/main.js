import React from 'react';
import LandingPage from './landingpage.js';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import About from './about';
import People from './people';
import Magic from './magic';

const Main = () => (
   <BrowserRouter>
    <Switch> 
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={About} />
      <Route path="/people" component={People} />
      <Route path="/magic" component={Magic} />
    </Switch> 
   </BrowserRouter>
)

export default Main;