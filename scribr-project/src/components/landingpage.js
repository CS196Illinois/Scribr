import React, { Component } from 'react';
import LogoHat from '../pictures/logo2.png';
import Poker from '../pictures/stack of cards.png';
import Notecard from '../pictures/notecard.png';
import './landingpage.css';
class Landing extends Component {
    state = {  }
    render() {
        return(
            <div className = "landingLogo"style={{width:'100%', margin: 'auto'}}>
              <div className="words">
                <h2>WELCOME TO</h2>
                <h6>space</h6>
                <h2>THE DARK SIDE OF </h2>
              </div>
                <div class="row">
                  <div class="column">
                    <img src={Notecard} alt="note" className="landingNote"/>
                  </div>
                  <div class="column">
                     <img src={LogoHat} alt="hat" className="landingHat"/>
                  </div>
                  <div class="column">
                    <img src={Poker} alt="poker" className="landingPoker"/>
                  </div>
                </div>
            </div>
        );
    }
}
export default Landing;
