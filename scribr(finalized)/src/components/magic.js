import React, { Component } from 'react';
import BlackLogo from '../pictures/blacklogo.png';
import './magic.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropzone from '../subComponent/Dropzone';


class Magic extends Component {
    render() {
        return(
            <div className = "word">
              <img src={BlackLogo}
                alt = "hat"
                className = "magic-hat"/>
                <h2 className="magic-header">
                    Upload mp4 here
                    <p></p>
                    Then press SCRIBE and we will transcribe the video for you!
                </h2>

                {/* Simple textfield */}
                <form className="magic-url">
                    <Dropzone/>
                </form>
            </div>      
        );
    }
}
export default Magic;
