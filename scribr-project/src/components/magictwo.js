import React, { Component } from 'react';
import './magictwo.css';
import Counter from './magicComponent/counter.jsx'

// TODO: Create a GET request that grabs the information from our python flask server - Davis
// TODO: Display this JSON information in the textarea below - Davis

class MagicTwo extends Component {
    state = {  }
    render() {
        return(
            <div>
                <Counter/>
                <div align="center" className="aboutText">
                    <textarea readOnly cols="120" rows="15">ReadOnly transcript here</textarea>
                </div>
            </div>
        );
    }
}

export default MagicTwo;