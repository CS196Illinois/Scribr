import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import "./script.pdf"
class Counter extends Component {
    
    constructor(){
        super();
        this.state = {
            counter:0
        }
    }
    
    incrementState(){
        this.setState({
            counter:this.state.counter+1
        })
    }
    
    styles = {
        fontSize: 15,
    };
    render() { 
        return (
        <div className="index">
            <image className = "image" style = {{width: 150, height: 75}} src = {require('./logo.png')} alt=''/>
            <h1 className="name">Successfully Transcribe!</h1> 
            <Button variant="contained" color="primary" className = "button" onClick = {()=>{this.incrementState()}} > Print PDF
            <image className = "icon2" style = {{width: 30, height: 30}} src = {require('./notecard.png')} alt=''/>
            </Button>
            <p></p>
            <p></p>
            <image className = "icon" style = {{width: 50, height: 50}} src = {require('./logo_hat.png')} alt=''/>
            <iframe width="853" height="480" src="https://www.youtube.com/embed/kKMF93xkmT0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p></p>
            <h2 className="name">Preview of PDF</h2>
            <Button variant="contained" color="secondary" className = "button"> Preview of Document
            <image className = "icon3" style = {{width: 30, height: 30}} src = {require('./stack of cards.png')} alt=''/>
            </Button>
            <p></p>
            <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Document</title>
            </head>
            <body>
            <div>
            <embed src="script" type="application/pdf" width="100%" height="600px" />
            </div>
            </body>
            </html>
            <h1>   Your Document is Here</h1>
            <Fab size="small" color="secondary" aria-label="add">
            <AddIcon /> 
            </Fab>
            <h6>Expand</h6>
            <p></p> 
        </div>
        )
    };
}
export default Counter;