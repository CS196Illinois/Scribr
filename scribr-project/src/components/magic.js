import React, { Component } from 'react';
import BlackLogo from '../pictures/blacklogo.png';
import './magic.css';
import { Textfield, Button, ProgressBar } from 'react-mdl'
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner'

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
                    />
                    {/* Accent-colored button with ripple */}
                    <Button raised accent ripple
                        className="magic-button"
                        onChange={() => {}}
                        style={{margin:"3%"}}>
                        Upload
                    </Button>
                        {/* Colored Raised button */}
                    <Button raised colored style={{margin: "0%" }} onClick={this.fetchData} disabled={loading}> 
                        {loading && <Spinner animation="border" />}
                        SCRIBE!</Button>
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
                <div className="pdf-preview">
                {error ? <p>{error.message}</p> : null}
                {loading ? <p>Loading...</p> : (<p>{message}</p>)}
                </div>
            </div>      
        );
    }
}
export default Magic;
