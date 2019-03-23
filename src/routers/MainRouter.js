import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import PuntosDeInteres from '../screens/PuntosDeInteres';
import Menu from "../screens/Menu";
import Drawer from '@material-ui/core/SwipeableDrawer';
import SideBar from '../components/SideBar';
import AppBar from '@material-ui/core/AppBar';
import AppBarContainer from '../components/AppBarComponent';

class MainRouter extends PureComponent {

  state = {
    drawerOpen: false,
  }

  render () {
    return (
      <Router>
        <div>
        <Drawer 
          onClose={()=>this.setState({drawerOpen: false})} 
          open={this.state.drawerOpen}
          onOpen={()=>this.setState({drawerOpen: true})} 
        >
          <SideBar/>
        </Drawer>
        <AppBar color={'white'}>
          <AppBarContainer 
            handleOpenBar={(open)=>this.setState({drawerOpen: open})}
          />
        </AppBar>
        <Route exact path="/Login/" component={Login}/>
        <Route exact path="/SignUp/" component={SignUp}/>
        <Route exact path="/PuntosDeInteres/" component={PuntosDeInteres}/>
        <Route exact path="/" component={Menu}/>
        </div>
      </Router>
    )
  }
}

export default MainRouter;