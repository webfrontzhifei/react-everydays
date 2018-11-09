import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Video from './components/videoplayer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Video src="https://video1.pinduoduo.com/i2/20181102/34ce52dfa50842138d54d5190282b679.mp4.f20.mp4"></Video>
        </header>
      </div>
    );
  }
}

export default App;
