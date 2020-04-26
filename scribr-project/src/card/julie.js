import React, { Component } from 'react';
import './julie.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Oh from '../pictures/julie.jpeg';
class Julie extends Component {
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
      <img src={Oh}
           alt = "oh"
           className="oh"
           style={{minWidth: '100%', maxHeight: '100%', float: 'left', display: 'block'}}/>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: 'black'}}>
      <h4>Julie Oh</h4>
      <h6>• An ice-cream snob (no, I'm not)</h6>
      <h6>• Framework developer</h6>
      <h6>• Back-end developer</h6>
    </BackSide>
  </Flippy>
        );
    }
}
export default Julie;