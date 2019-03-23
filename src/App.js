import React, { Component } from 'react';
import logo from './logo.svg';
import MainRouter from './routers/MainRouter';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import AppBarContainer from './components/AppBarComponent';

class App extends Component {

  render() {
    return (
      <div style={{paddingTop: 50}}>
        <MainRouter />
      </div>
    );
  }
}

export default App;
