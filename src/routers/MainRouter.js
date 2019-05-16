import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import PuntosDeInteres from "../screens/PuntosDeInteres";
import Menu from "../screens/Menu";
import AppBar from "@material-ui/core/AppBar";
import AppBarContainer from "../components/AppBarComponent";
import Modal from "@material-ui/core/Modal";
import ConfigurationModalComponent from "../components/ConfigurationModalComponent";
import Business from "../screens/Business";
import Events from "../screens/Events";
import Momentos from "../screens/Momentos";
import Drawer from "@material-ui/core/SwipeableDrawer";
import SideBar from "../components/SideBar";
import Mapa from "../screens/Mapa";
import DescripcionPuntosDeInteres from "../screens/DescripcionPuntosDeInteres";
import MomentosPuntosDeInteres from "../screens/MomentosPuntosDeInteres";
import EditarPerfil from "../screens/EditarPerfil";

const dontNav = [""];

class MainRouter extends PureComponent {
  state = {
    drawerOpen: false,
    openOptions: false
  };

  render() {
    return (
      <Router>
        <div>
          <Drawer
            onClose={() => this.setState({ drawerOpen: false })}
            open={this.state.drawerOpen}
            onOpen={() => this.setState({ drawerOpen: true })}
          >
            <SideBar />
          </Drawer>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.openOptions}
            onClose={() => this.setState({ openOptions: false })}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: 20
            }}
          >
            <ConfigurationModalComponent
              update={() => {
                console.log("bru");
                this.forceUpdate();
              }}
            />
          </Modal>
          {console.log(window.location.pathname)}
          {!dontNav.includes(window.location.pathname) && (
            <AppBar color={"white"}>
              <AppBarContainer
                handleOpenOptions={open => this.setState({ openOptions: open })}
                handleOpenBar={open => this.setState({ drawerOpen: open })}
              />
            </AppBar>
          )}
          <Route exact path="/Login/" component={Login} />
          <Route exact path="/SignUp/" component={SignUp} />
          <Route exact path="/PuntosDeInteres/" component={PuntosDeInteres} />
          <Route exact path="/" component={PuntosDeInteres} />
          <Route exact path="/Events" component={Events} />
          <Route exact path="/Business/" component={Business} />
          <Route exact path="/Momentos/" component={Momentos} />
          <Route exact path="/Menu/" component={Menu} />
          <Route exact path="/Mapa/" component={Mapa} />
          <Route
            exact
            path="/DescripcionPuntosDeInteres/"
            component={DescripcionPuntosDeInteres}
          />
          <Route
            exact
            path="/MomentosPuntosDeInteres/"
            component={MomentosPuntosDeInteres}
          />
          <Route exact path="/EditarPerfil" component={EditarPerfil} />
        </div>
      </Router>
    );
  }
}

export default MainRouter;
