import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to HackMerced!</h2>
        </div>
        <p className="App-intro">
          This is a demo of what we can build at HackMerced :)
        </p>
		<p>New paragraph</p>
        <p>Here's more text!</p>
      </div>
    );
  }
}

export default App;
