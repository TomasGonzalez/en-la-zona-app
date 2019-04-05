import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Home from 'react-ionicons/lib/IosHomeOutline';
import MdSync from 'react-ionicons/lib/MdSync';
import MdCalendar from 'react-ionicons/lib/MdCalendar';
import IosBriefcase from 'react-ionicons/lib/IosBriefcase';
import MdHappy from 'react-ionicons/lib/MdHappy';
import IosMapOutline from 'react-ionicons/lib/IosMapOutline';
import IosSettings from 'react-ionicons/lib/IosSettings';
import IosLogOut from 'react-ionicons/lib/IosLogOut';

import { Button } from 'antd';
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  width: 250px;
`;

const ProfileImage = styled.div`
  background-color: #313A52;
  height: 150px;
  border-bottom-color: #4E96F6;
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
  display: 'flex',
  width: '100%',
  paddingTop: 6,
  borderWidth: 0,
  backgroundColor: 'transparent'
}

const ButtonText = styled.p`
  padding-left: 10px;
  color: #707070;
`;

class SideBar extends PureComponent {
  render () {    
    return (
      <MainContainer>
        <ProfileImage>
        </ProfileImage>
        <NavButtonsContainer>
          <NavButtons as={Link} to="/">
            <Button style={buttonStyle} size={'large'}>
              <Home fontSize="20px" color="#4E96F6" />
              <ButtonText>Inicio</ButtonText>
            </Button>
          </NavButtons>
          <NavButtons as={Link} to="/PuntosDeInteres">
            <Button style={buttonStyle} size={'large'}>
              <MdSync fontSize="20px" color="#4E96F6" />
              <ButtonText>Puntos de interes</ButtonText>
            </Button>
          </NavButtons>
          <NavButtons as={Link} to="/Events">
            <Button style={buttonStyle} size={'large'}>
              <MdCalendar fontSize="20px" color="#4E96F6" />
              <ButtonText>Eventos</ButtonText>
            </Button>
          </NavButtons>
          <NavButtons as={Link} to="/Business/">
            <Button style={buttonStyle} size={'large'}>
              <IosBriefcase fontSize="20px" color="#4E96F6" />
              <ButtonText>Negocios</ButtonText>
            </Button>
          </NavButtons>
          <NavButtons as={Link} to="/Momentos">
            <Button style={buttonStyle} size={'large'}>
              <MdHappy fontSize="20px" color="#4E96F6" />
              <ButtonText>Momentos</ButtonText>
            </Button>
          </NavButtons>
          <NavButtons as={Link} to="/">
            <Button style={buttonStyle} size={'large'}>
              <IosMapOutline fontSize="20px" color="#4E96F6" />
              <ButtonText>Mapa</ButtonText>
            </Button>
          </NavButtons>
          <NavButtons as={Link} to="/">
            <Button style={buttonStyle} size={'large'}>
              <IosSettings fontSize="20px" color="#4E96F6" />
              <ButtonText>Ajustes</ButtonText>
            </Button>
          </NavButtons>
        </NavButtonsContainer>
          <NavButtons style={{backgroundColor: '#EE993B', marginTop: 20}}>
            <Button style={buttonStyle} size={'large'}>
              <IosLogOut fontSize="20px" color="white" />
              <ButtonText>Log Out</ButtonText>
            </Button>
          </NavButtons>
      </MainContainer>
    )
  }
}

export default SideBar;