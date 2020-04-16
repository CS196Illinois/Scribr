import React, { Component } from 'react';
import './jon.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Kang from '../pictures/jon.jpg';
class Jon extends Component {
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
      <img src={Kang}
           alt = "kang"
           className="kang"
           style={{minWidth: '100%', maxHeight: '100%', float: 'left', display: 'block'}}/>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: 'black'}}>
      <h4>Jonathan Kang</h4>
      <h6>• UIUC student</h6>
      <h6>• Is asleep somewhere</h6>
      <h6>• Just Vibin'</h6>
    </BackSide>
  </Flippy>
        );
    }
}
export default Jon;