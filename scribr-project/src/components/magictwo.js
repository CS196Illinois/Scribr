import React, { Component } from 'react';
import './counter.css';
import Counter from './magicComponent/counter.jsx'



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