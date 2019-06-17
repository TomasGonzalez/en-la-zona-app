import React, { PureComponent } from "react";
import styled from "styled-components";
import Home from "react-ionicons/lib/IosHomeOutline";
import MdSync from "react-ionicons/lib/MdSync";
import MdCalendar from "react-ionicons/lib/MdCalendar";
import IosBriefcase from "react-ionicons/lib/IosBriefcase";
import MdHappy from "react-ionicons/lib/MdHappy";
import IosMapOutline from "react-ionicons/lib/IosMapOutline";
import IosSettings from "react-ionicons/lib/IosSettings";
import IosLogOut from "react-ionicons/lib/IosLogOut";
import MdPerson from "react-ionicons/lib/MdPerson";
import Back from "react-ionicons/lib/IosArrowRoundBack";
import { withRouter } from "react-router-dom";

import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "redux";

import { Button } from "antd";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  width: 250px;
`;

const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #313a52;
  height: 150px;
  border-bottom-color: #4e96f6;
  border-bottom-style: solid;
  border-bottom-width: 9px;
`;

const NavButtonsContainer = styled.div`
  margin-top: 30px;
  justify-content: center;
`;

const NavButtons = styled.button`
  display: flex;
  width: 100%;
  background-color: white;
  border-width: 0px;
  padding-top: 10px;
`;

const buttonStyle = {
  display: "flex",
  width: "100%",
  paddingTop: 6,
  borderWidth: 0,
  backgroundColor: "transparent"
};

const ButtonText = styled.p`
  padding-left: 10px;
  color: #707070;
`;

const Image = styled.img`
  border-radius: 50px;
  object-fit: cover;
`;
class SideBar extends PureComponent {
  handleLogout = () => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
      this.forceUpdate();
    }
  };

  render() {
    return (
      <MainContainer>
        <div onClick={() => (window.location = "/EditarPerfil")}>
          {this.props.data.usuario &&
          this.props.data.usuario.urlFotoMiniatura ? (
            <ProfileImage>
              <Image
                src={this.props.data.usuario.urlFotoMiniatura}
                alt="Smiley face"
                height="90"
                width="90"
              />
            </ProfileImage>
          ) : (
            <ProfileImage>
              <div style={{ backgroundColor: "white", borderRadius: 20 }}>
                <MdPerson fontSize="90px" size={"large"} />
              </div>
            </ProfileImage>
          )}
        </div>
        <NavButtonsContainer>
          <NavButtons as={Link} to="/OnBoarding">
            <Button
              onClick={() => this.props.close()}
              style={buttonStyle}
              size={"large"}
            >
              <Home fontSize="20px" color="#4E96F6" />
              <ButtonText> Introduccion </ButtonText>
            </Button>
          </NavButtons>
          <NavButtons as={Link} to="/PuntosDeInteres">
            <Button
              onClick={() => this.props.close()}
              style={buttonStyle}
              size={"large"}
            >
              <MdSync fontSize="20px" color="#4E96F6" />
              <ButtonText>Puntos de interés</ButtonText>
            </Button>
          </NavButtons>
          <NavButtons as={Link} to="/Events">
            <Button
              onClick={() => this.props.close()}
              style={buttonStyle}
              size={"large"}
            >
              <MdCalendar fontSize="20px" color="#4E96F6" />
              <ButtonText>Eventos</ButtonText>
            </Button>
          </NavButtons>
          <NavButtons as={Link} to="/Business">
            <Button
              onClick={() => this.props.close()}
              style={buttonStyle}
              size={"large"}
            >
              <IosBriefcase fontSize="20px" color="#4E96F6" />
              <ButtonText>Negocios</ButtonText>
            </Button>
          </NavButtons>
          <NavButtons as={Link} to="/Momentos">
            <Button
              onClick={() => this.props.close()}
              style={buttonStyle}
              size={"large"}
            >
              <MdHappy fontSize="20px" color="#4E96F6" />
              <ButtonText>Momentos</ButtonText>
            </Button>
          </NavButtons>
          <NavButtons as={Link} to="/Mapa">
            <Button
              onClick={() => this.props.close()}
              style={buttonStyle}
              size={"large"}
            >
              <IosMapOutline fontSize="20px" color="#4E96F6" />
              <ButtonText>Mapa</ButtonText>
            </Button>
          </NavButtons>
          {/* <NavButtons as={Link} to="/">
            <Button onClick={() => this.props.close()} style={buttonStyle} size={'large'}>
              <IosSettings fontSize="20px" color="#4E96F6" />
              <ButtonText>Ajustes</ButtonText>
            </Button>
          </NavButtons> */}
        </NavButtonsContainer>
        <NavButtons
          as={Link}
          to={"/Login"}
          onClick={this.handleLogout}
          style={{ backgroundColor: "#EE993B", marginTop: 20 }}
        >
          <Button
            onClick={() => this.props.close()}
            style={buttonStyle}
            size={"large"}
          >
            <IosLogOut fontSize="20px" color="white" />
            <ButtonText>
              {localStorage.getItem("user")
                ? "Cerrar sesión"
                : "Iniciar sesión"}
            </ButtonText>
          </Button>
        </NavButtons>
      </MainContainer>
    );
  }
}

const query = gql`
  query($token: String!) {
    usuario(token: $token) {
      idUsuario
      primerNombre
      segundoNombre
      apellido
      nombreDeUsuario
      perfilVisitante {
        idPerfilVisitante
        urlFotoPerfilVisitante
        biografiaVisitante
      }
      urlFotoMiniatura
      momentos {
        edges {
          node {
            multimedia
          }
        }
      }
    }
  }
`;

export default compose(
  graphql(query, {
    options: props => {
      return {
        variables: {
          token: localStorage.getItem("user")
        }
      };
    }
  })
)(SideBar);
