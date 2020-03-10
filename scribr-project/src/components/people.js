import React, { Component } from 'react';
import LogoHat from '../pictures/logo_hat.png';
class People extends Component {
    state = {  }
    render() {
        return(
            <img src={LogoHat}
             alt = "hat"
             className="landingHat"/>
        );
    }
}
export default People;