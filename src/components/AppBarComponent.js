import React, { PureComponent } from "react";
import styled from "styled-components";
import IosMenuOutline from "react-ionicons/lib/IosMenuOutline";
import IosOptionsOutline from "react-ionicons/lib/IosOptionsOutline";
import Back from "react-ionicons/lib/IosArrowRoundBack";
import { withRouter } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
`;

const dontNav = ["/PuntosDeInteres"];

class AppBarComponent extends PureComponent {
  render() {
    return (
      <MainContainer>
        <div>
          <Back onClick={() => this.props.history.goBack(this)} />
          <IosMenuOutline
            style={{ marginLeft: 10 }}
            onClick={() => this.props.handleOpenBar(true)}
          />
        </div>
        {dontNav.includes(window.location.pathname) && (
          <IosOptionsOutline
            onClick={() => this.props.handleOpenOptions(true)}
          />
        )}
      </MainContainer>
    );
  }
}

export default withRouter(AppBarComponent);
