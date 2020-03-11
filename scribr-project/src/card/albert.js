import React, { Component } from 'react';
import './albert.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Li from '../pictures/Albert.jpg';
class Albert extends Component {
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
      <img src={Li}
           alt = "li"
           className="li"
           style={{maxWidth: '100%', minHeight: '100%', float: 'left', display: 'block'}}/>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: 'black'}}>
      <h4>Albert Li</h4>
      <h6>• Student</h6>
      <h6>• Getting Big</h6>
      <h6>• Trying to get bigger</h6>
    </BackSide>
  </Flippy>
        );
    }
}
export default Albert;