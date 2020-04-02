import React, {Component} from 'react';
import './App.css';
import HomepageImage from './components/HomepageImage';
import ReactTypingEffect from 'react-typing-effect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomepageImage />
        <h1 id="name">
          JuLIe Oh
        </h1>
        <ReactTypingEffect
          text="Hello World! I am a cookie addict yet still a human." 
        />
        <h3><i>I am so glad you are me </i>-JSG</h3>
        <Counter />
      </header>
    </div>
  );
}

class Counter extends Component {

  state = {
    count: 0
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}

export default App;