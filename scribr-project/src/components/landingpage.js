import React, { Component } from 'react';
import walking from '../pictures/full run(i).gif'
import { Button } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
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
                <Fade bottom>
                    <h2>Make your life easier</h2>
                </Fade>
                <Fade bottom>
                    <h2>with</h2>
                </Fade>
                <div className="landing-body">
                    <img className="barimage" src={walking} alt="barimage"/>
                </div>
                <Flip bottom delay={3800}>
                    <h1>SCRIBR</h1>
                </Flip>
                
                <div className="middle-header">
                    <div className="buttons">
                        
                        <div className="bsss">
                            <Fade bottom delay= {4800}>
                                <div className="spot spot1">
                                    <Button className="bs about" variant="contained" color="primary" size="large"><a href="/about" style={{color: 'white'}}><font size="4">About</font></a></Button>
                                </div>
                                <div className="spot spot2">
                                    <Button className="bs start" variant="contained" color="secondary" size="large"><a href="/magic" style={{color: 'white'}}><font size="4">Get Started</font></a></Button>
                                </div>
                                <div className="spot spot3">
                                    <Button className="bs team" variant="contained" color="#00ff73" size="large"><a href="/people" style={{color: 'white'}}><font size="4">Team</font></a></Button>
                                </div>
                            </Fade>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Landing;
