import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import PuntosDeInteres from '../screens/PuntosDeInteres';

const MainRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login}/>
      <Route exact path="/SignUp/" component={SignUp}/>
      <Route exact path="/PuntosDeInteres/" component={PuntosDeInteres}/>
    </div>
  </Router>
)

export default MainRouter;