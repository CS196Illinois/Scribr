import React, { Component } from 'react';
import './people.css';
import '../card/bryant';
import Bryant from '../card/bryant';
import Alyssa from '../card/alyssa';
import Charles from '../card/charles';
import Jess from '../card/jess';
import Jon from '../card/jon';
import Julie from '../card/julie';
import Davis from '../card/davis';
import Albert from '../card/albert';

class People extends Component {
    state = {  }
    render() {
        return(
          <div class="compre">
             <h2>Meet our team!</h2>
            <div class="row">
              <div class="column">
                 <Albert></Albert>
              </div>
              <div class="column">
                 <Charles></Charles>
              </div>
              <div class="column">
                 <Alyssa></Alyssa>
              </div>
              <div class="column">
                 <Bryant></Bryant>
              </div>
            </div>
            <div class="row">
              <div class="columnone">
                 <Davis></Davis>
              </div>
              <div class="columnone">
                 <Jess></Jess>
              </div>
              <div class="columnone">
                 <Jon></Jon>
              </div>
              <div class="columnone">
                 <Julie></Julie>
              </div>
            </div>
        </div>
        );
    }
}
export default People;