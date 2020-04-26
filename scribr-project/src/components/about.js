import React, { Component } from 'react';
import AboutImage from '../pictures/about.png';
import video from '../pictures/video.png';
import api from '../pictures/api (1).png';
import download from '../pictures/ui.png';
import ReactTypingEffect from 'react-typing-effect';
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
                <h4>
                    <ReactTypingEffect
                        text="#Scribr #Free Transcription #99% Accuracy"
                    />                        
                </h4>
                
                </div>

                <div className="explanation">
                    <div className="exp exp1">
                        <img className="aboutimage" src={AboutImage} alt="aboutimage" style={{maxWidth: "80%", marginLeft:"12%"}}/>
                    </div>
                    
                    <div className="exp exp2">
                        <h2 className="HIW">How It Works</h2>
                        <br></br>
                        <div className="How">
                            <div className="how upload">
                                <img src={video} alt="video" className="img video"/>
                                <h3>Upload Video Files</h3>
                                <p>
                                Choose .mp4 video files from your computer. Then, click Scribr!. 
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
                                    Simply click Download to save and view with our tools.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;