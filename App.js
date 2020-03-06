import React from 'react';
import Dog from "./dog.png";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="header">
        <h1 style={{color: "orange"}}>Alyssa</h1>
      </div>
      <img src={Dog} alt="dog1"></img>
      <p>My name is Alyssa Fieldman, I am a freshman, and I am from Naperville Illinois. I am undeclared for my major right now. </p>
      <p style={{fontStyle: 'italic'}}>"What's meant to be will always find a way"</p>
    
      <button variant="primary">Click Here!</button>
    </div>
  );
}

export default App;
