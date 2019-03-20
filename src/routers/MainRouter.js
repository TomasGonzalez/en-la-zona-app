import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import PuntosDeInteres from '../screens/PuntosDeInteres';
import Menu from "../screens/Menu";

const MainRouter = () => (
  <Router>
    <div>
      <Route exact path="/Login/" component={Login}/>
      <Route exact path="/SignUp/" component={SignUp}/>
      <Route exact path="/PuntosDeInteres/" component={PuntosDeInteres}/>
      <Route exact path="/" component={Menu}/>
    </div>
  </Router>
)

export default MainRouter;