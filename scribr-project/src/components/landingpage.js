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
          <div class="image123">
                <div class="imgContainer">
                    <img src={Notecard} alt="card" className="card"/>
                </div>
                <div class="imgContainer">
                <a href="/magic">
                    <img src={LogoHat} alt="hat" className="hat"/>
                    <h6>Click The Logo!</h6>
                </a>
                </div>
                <div class="imgContainer">
                    <img src={Poker} alt="poke" className="poke"/>
                </div>
          </div>
        </div>
        );
    }
}
export default Landing;
