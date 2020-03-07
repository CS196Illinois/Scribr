import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
class Counter extends Component {
    state = {
        count : 0
    };
    styles = {
        fontSize: 15,

    };
    render() { 
        let number = 0;
        return (
        <div className="index">
            <h1 className="name">Jieshu Huang</h1>
        <Button variant="contained" color="primary" className = "button" onClick = {number +=1}>{number}</Button>
            <p></p>
            <image className = "image" style = {{width: 1000, height: 500}} src = {require('./0001.jpg')} alt=''/>
            <p></p>
            <h2 className="quote">I don't know</h2>
            <h3 className="introduction">I don't want to write</h3>
            
        </div>
        )
    };
}
export default Counter;