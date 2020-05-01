import React, { Component } from 'react';
import chip from '../pictures/chip(9).png';
import './magic.css';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropzone from './Dropzone';
import { Button, Container } from '@material-ui/core';



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
                    
                    <h1>Now, it's your turn to Scribe!</h1>
                    <p>Upload your video files, click Scribe, and that's it.<br></br>At the end, you can either view or download your transcript.</p>
                </div>


                <div className="magic-body">
                    <div className="dropBox">
                        <Dropzone/>
                    </div>
                    <div className="chips">
                        <div className="chip chip1">
                            <img className="chipimg chip-video" src={chip} alt="chipvideoimage"/>
                        </div>
                        <div className="chip chip2">
                            <img className="chipimg chip-script" src={chip} alt="chipscriptimage"/>
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
                    <div className="script"></div>
                    
                </div>

                <div className="magic-end">
                        <Button variant="contained" color="secondary" size="medium"><font size="4">Download</font></Button>
                </div>
            </div>      
        );
    }
}
export default Magic;
