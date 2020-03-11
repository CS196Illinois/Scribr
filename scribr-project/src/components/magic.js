import React, { Component } from 'react';
import LogoHat from '../pictures/logo_hat.png';
import './magic.css';
import './video.css';
import { Textfield, Button, ProgressBar } from 'react-mdl'
import ReactPlayer from 'react-player';


class Magic extends Component {
    state = {  }
    render() {
        return(
            <div className = "word">
              <img src={LogoHat}
                alt = "hat"
                className = "magic-hat"/>
                <h2 className="magic-header">
                    Paste and UPLOAD the link here. 
                    <p></p>
                    Then press SCRIBE and we will transcribe the video for you!
                </h2>

                {/* Simple textfield */}
                <form className="magic-url">
                    <Textfield
                        label="URL..."
                        style={{width: '200px'}}
                        input="URL"
                    />

                    {/* Accent-colored button with ripple */}
                    <Button raised accent ripple
                        className="magic-button"
                        onChange={() => {}}>
                        Upload
                    </Button>

                    {/* Colored Raised button */}
                    <Button raised colored>SCRIBE!</Button>
                    <p className="magic-progress">
                        {/* Progress Bar with Indeterminate Progress */}
                        <ProgressBar indeterminate position="right" />
                    </p> 
                </form>
                <p className='magic-player'>
                    {/* Video Preview */}
                    <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=_axXcz15zTg'
                    width='45%'
                    height='45%'
                    />

                </p>
                <h4>
                    Please wait as we are scribing the video...
                </h4>
            </div>      
        );
    }
}
export default Magic;

// function Input({onKeyPress}) {}