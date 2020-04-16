import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

class Counter extends Component {

    render() { 
        return (
        <div className="index">
            <p></p>

            <p></p>

            <iframe className = "video" width="853" height="400" src="https://www.youtube.com/embed/kKMF93xkmT0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <p></p>
            <div className = "twoButtons"> 
               <Button variant="contained" color="primary" className = "buttonOne" > Preview Text</Button>
               <Button variant="contained" color="primary" className = "buttonTwo" style={{margin:"3%"}}> Save As PDF </Button>
            </div>
        </div>

        )

    };

}

export default Counter;