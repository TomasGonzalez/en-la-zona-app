import React, { Component } from 'react';
import logo from './logo.svg';
import MainRouter from './routers/MainRouter.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <MainRouter/>
    );
  }
}

export default App;
