import React, { Component } from 'react';
import bar from '../pictures/searchbar.png';
import AboutImage from '../pictures/about.png';
import video from '../pictures/video.png';
import api from '../pictures/api (1).png';
import download from '../pictures/ui.png';
import ReactTypingEffect from 'react-typing-effect';
import { Button, Container } from '@material-ui/core';
import './about.css';
class About extends Component {
    state = {  }
    render() {
        return(
            <div className="about-page">
                <div className="about-header">
                    <h1>Video Transcription? We got this.</h1>
                    <h3> 
                        For free, transcript as many videos as you want!
                    </h3>
                    <Button variant="contained" color="secondary" size="medium"><a href="/magic" style={{color: 'white'}}><font size="4">Get Started</font></a></Button>
                </div>

                <div className="definition">
                    <div className="searchbar">
                        <img className="barimage" src={bar} alt="barimage"/>
                    </div>
                    <div className="def def-bar">
                        <h1><ReactTypingEffect text="Scribr definition"></ReactTypingEffect></h1>
                    </div>
                    <div className="def def-img">
                        <img className="aboutimage" src={AboutImage} alt="aboutimage"/>
                    </div>
                </div>
                    
                <div className="operation">
                    <h2 className="HIW">How It Works</h2>
                    <div className="How">
                        <div className="how upload">
                            <img src={video} alt="video" className="img video"/>
                            <h3>Upload Video Files</h3>
                            <p>
                            Choose video files from your computer. .mp4 and .wav forms are allowed. 
                            </p>
                        </div>
                        <div className="how transcribe">
                            <img src={api} alt="api" className="img api"/>
                            <h3>Transcribe</h3>
                            <p>
                                Using Google Speech-to-Text API, we transcribe any videos 24/7 with high accuracy. 
                            </p>
                        </div>
                        <div className="how receive">
                            <img src={download} alt="download" className="img download"/>
                            <h3>Receive</h3>
                            <p>
                                Simply click Download to save and freely view and edit with our tools.
                            </p>
                        </div>
                    </div>
                </div>   
            </div>
        );
    }
}
export default About;