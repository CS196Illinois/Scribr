import React, { Component } from 'react';
import video from '../pictures/video.png';
import api from '../pictures/api (1).png';
import download from '../pictures/ui.png';
import './magic.css';
import { Textfield, Button, ProgressBar } from 'react-mdl';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner'
import Dropzone from './Dropzone';
import ReactTypingEffect from 'react-typing-effect';


// TODO: button to open up file explorer, letting user input video file - Julie
// TODO: make transcribe button un-clickable until video is put in - Alyssa
// TODO: Make a loading screen so that user knows the progress of transcription before it goes to magictwo page - Jessica

class Magic extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          message: '',
          error: null,
        };
      }
     fetchData = () =>{
         this.setState({loading : true});
        fetch("http://127.0.0.1:5000/")
        .then(response => response.json())
        .then(data => this.setState({ loading: false, message: data}))
        .catch(error => this.setState({error, loading: false}));;   
     }

    render() {
        var {loading, message, error} = this.state;
        return(
            <div className = "word">
                <div className="magic-header">
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

                <div className="magic-body">
                    <div className="mbody b1">
                        <h2>Get Started >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></h2>
                    </div>
                    <div className="mbody b2">
                        <Dropzone/>
                    </div>
                </div>
                

                <p className='magic-player'>
                    {/* Video Preview */}
                    <ReactPlayer
                    className='react-player'
                    url="https://www.youtube.com/embed/kKMF93xkmT0"
                    width='20%'
                    height='20%'
                    />
                </p>
                <div className="pdf-preview">
                {error ? <p>{error.message}</p> : null}
                {loading ? <p>Loading...</p> : (<p>{message}</p>)}
                </div>
            </div>      
        );
    }
}
export default Magic;
