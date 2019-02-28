import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../screens/Login';

const MainRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login}/>
    </div>
  </Router>
)

export default MainRouter;