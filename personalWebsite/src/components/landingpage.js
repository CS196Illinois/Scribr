import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Kobe from "./kobe.png"
class Landing extends Component {
    state = {  }
    render() { 
        return (
            <div style={{width:'100%', margin: 'auto'}}>
              <Grid className = "landing-grid">
                <Cell col={12}>
                   <img src={Kobe}
                    alt="kobe"
                    className= "kobe-img"/>
                   <div className="banner-text">
                      <h1>Web Developer</h1>
                      <h2>Bryant Zhou</h2>
                     <hr/>
                     <p>HTML | CSS | JavaScript | React</p>
                     <div className = "social-link">
                        <a href="https://www.linkedin.com/in/tianyi-zhou-967991193/" rel="noopener noreferrer" target="_blank">
                          <i class="fa fa-linkedin-square" aria-hidden="true" />
                        </a>
                        <a href="https://github.com/tianyiz8" rel="noopener noreferrer" target="_blank">
                          <i class="fa fa-github-square" aria-hidden="true" />
                        </a>
                     </div>
                    </div>
                </Cell>
              </Grid>
            </div>
        );
    }
}
 
export default Landing;