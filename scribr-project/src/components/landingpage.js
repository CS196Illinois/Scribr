import React, { Component } from 'react';
import {TransitionGroup} from 'react-transition-group';
import name from '../pictures/scribr-name.png';
import walking from '../pictures/entering S.gif'
import { Button } from '@material-ui/core';
import './landingpage.css';

const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  };

class Landing extends Component {
    state = {  }
    render() {
        return(
        <div className = "landingLogo">
            <div className="landing-header">
                <h1>Make life easier with</h1>
                <div className="middle-header">
                    <div className="buttons">
                        <div className="bsss">
                            <div className="spot spot1">
                                <Button className="bs about" variant="contained" color="primary" size="medium"><a href="/about" style={{color: 'white'}}><font size="4">About</font></a></Button>
                            </div>
                            <div className="spot spot2">
                                <Button className="bs start" variant="contained" color="secondary" size="medium"><a href="/magic" style={{color: 'white'}}><font size="4">Get Started</font></a></Button>
                            </div>
                            <div className="spot spot3">
                                <Button className="bs team" variant="contained" color="#00ff73" size="medium"><a href="/people" style={{color: 'white'}}><font size="4">Team</font></a></Button>
                            </div>
                        </div>
                    </div>
                    <div className="name">
                        <img className="nameimg" src={name} alt="nameimg"/>
                    </div>
                </div>
            </div>
            <div className="landing-body">
                <img className="barimage" src={walking} alt="barimage"/>
            </div>
        </div>
        );
    }
}
export default Landing;
