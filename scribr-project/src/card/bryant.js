import React, { Component } from 'react';
import './bryant.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Zhou from '../pictures/bryant.jpeg';
class Bryant extends Component {
    state = {  }
    render() {
        return(
            <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '240px', height: '300px' }} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
        backgroundColor: 'white',
        alignItems: 'center',
        display: 'block',
        flexDirection: 'row'
      }}
    >
      <img src={Zhou}
           alt = "zhou"
           className="zhou"
           style={{minWidth: '100%', maxHeight: '100%', float: 'left', display: 'block'}}/>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: 'black'}}>
      <h4>Bryant Zhou</h4>
      <h6>• Dunker</h6>
      <h6>• Memory Palace User</h6>
      <h6>• Able to mess up anything</h6>
    </BackSide>
  </Flippy>
        );
    }
}
export default Bryant;