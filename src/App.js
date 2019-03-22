import React, { Component } from 'react';
import logo from './logo.svg';
import MainRouter from './routers/MainRouter.js';
import './App.css';
import Drawer from '@material-ui/core/Drawer';
import SideBar from '../src/components/SideBar';
import AppBar from '@material-ui/core/AppBar';

class App extends Component {
  
  render() {
    return (
      <div>
        <Drawer open={true} >
          <SideBar/>
        </Drawer>
        <AppBar>
          <p>Hello motto</p>
        </AppBar>
        <MainRouter/>
      </div>
    );
  }
}

export default App;
