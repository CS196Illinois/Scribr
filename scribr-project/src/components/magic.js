import React, { Component } from 'react';
import BlackLogo from '../pictures/blacklogo.png';
import './magic.css';
import { Textfield, Button, ProgressBar } from 'react-mdl'
import ReactPlayer from 'react-player';

// TODO: button to open up file explorer, letting user input video file - Julie
// TODO: make transcribe button un-clickable until video is put in - Alyssa
// TODO: Make a loading screen so that user knows the progress of transcription before it goes to magictwo page - Jessica

class Magic extends Component {
    state = {  }
    render() {
        return(
            <div className = "word">
              <img src={BlackLogo}
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
                        style={{width: '400px'}}
                        input="URL"
                        if (URL.length > 0) {
                            value={this.state.value}
                        }
                    />
                    {/* Accent-colored button with ripple */}
                    <Button raised accent ripple
                        className="magic-button"
                        onChange={() => {}}
                        style={{margin:"3%"}}>
                        Upload
                    </Button>
                        {/* Colored Raised button */}
                    <Button 
                        disabled={!this.state.value}
                        raised colored style={{margin: "0%" }}>
                        SCRIBE!
                    </Button>
                    <div className="magic-progress">
                        {/* Progress Bar with Indeterminate Progress */}
                        <ProgressBar indeterminate position="left"/>
                    </div> 
                </form>
                <p className='magic-player'>
                    {/* Video Preview */}
                    <ReactPlayer
                    className='react-player'
                    url="https://www.youtube.com/embed/kKMF93xkmT0"
                    minWidth='55%'
                    minHeight='55%'
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
