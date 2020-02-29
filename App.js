import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Home Info Contact other_features?
        </p>
        <img src={logo} className="App-logo" alt="logo"/>
        <form>
          <label className="App-url">
            URL INSERT HERE:
            <input type="URL" name="URL HERE" />
            <input type="submit" value="Submit" />
          </label>
        </form>
      </header>
      <h1 className="App-preview">
        Preview of Video
      </h1>
      <h2 className="App-video">
        (video)
        <canvas width="10" height="400" id="video" align="center" color="black"></canvas>
      </h2>
      <p className="App-range">
          Start <input type="number" name="Start" />
          End <input type="number" name="End" />
        </p>
      <line>
        - - - - -
      </line>
      <h2>
        <p className="App-description">
          Name of Program 
          + desctiption of website here
        </p>
      </h2>
    </div>
  );
}

export default App;

/* <a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a> */