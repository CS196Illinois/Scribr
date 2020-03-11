import React, { Component } from 'react';
import LogoHat from '../pictures/logo_hat.png';
class About extends Component {
    state = {  }
    render() {
        return(
            <div className = "word">
              <img src={LogoHat}
                alt = "hat"
                className="landingHat"/>
            </div>
        );
    }
}
export default About;

