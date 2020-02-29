import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        videoUrl : 'https://www.youtube.com/watch?v=miG5mGcez7I',
        scriptUrl : 'script.pdf'
    };
    render() { 
        return (
        <React.Fragment>
            <h1>Your vedio</h1>
            <video src="videoUrl"/>
            <h1>       </h1>
            <button className="btn btn-second btn-sm">download pdf</button> <button className="btn btn-second btn-sm">return</button>
            <h1>Preview of pdf</h1>
            <doc src="scriptUrl"/>
            <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=2.0"/>
                <title>Your script here</title>
            </head>
            <body>
            Your document is here
            </body>
            </html>
            <button className="btn btn-second btn-sm">expand</button>
        </React.Fragment>
        );
    }
}
export default Counter;