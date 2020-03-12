import React, { Component } from 'react';
import AboutImage from '../pictures/about.png';
import './about.css';
class About extends Component {
    state = {  }
    render() {
        return(
        <div>
            <img className="aboutimage" src={AboutImage} alt="aboutimage" style={{maxWidth: "80%", marginLeft:"12%"}}/>
        </div>
        );
    }
}
export default About;