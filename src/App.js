import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameLogic from './GameLogic.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameLogic/>
      </div>
    );
  }
}

export default App;
