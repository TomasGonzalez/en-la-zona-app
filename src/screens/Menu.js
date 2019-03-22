import React, { PureComponent } from 'react';
import {
  Menu, 
  Dropdown,
  Button, 
  Slider
} from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const data = [
  "restaurantes",
  "heladerias",
  "turismo",
  "esculturas",
];

const menu = (
  <Menu>
    {data.map((item)=>{
      return (
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer">{item}</a>
        </Menu.Item>
      )})
    }
  </Menu>
);

const mapStyles = {
  height: '100%',
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const PriceRange = styled.div`
  padding-top: 20px;
`;

const Location = styled.div`
  padding-top: 20px;
  height: 350px;
  width: 100px;
`;

const MileRange = styled.div`
  padding-top: 20px;
`;

const MapContainer = styled.div`
  display: flex;
  flex: 1;
`;

const LoginButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #EE993B;
  justify-content: center;
  padding-top: 8px;
  align-items: center;
`;

const LoginButtonText = styled.p`
  color: white;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  padding-top: 30px;
`;

class AppMenu extends PureComponent {

  state = {
    open: false,
  }

  render () {
    return (
      <MainContainer>
        <Dropdown overlay={menu} placement="bottomCenter">
          <Button>Categories</Button>
        </Dropdown>
        <PriceRange>
          <p style={{color: '#EE993B'}}> Rango de precio </p>
          <Slider range defaultValue={[20, 50]} />
        </PriceRange>
        <Location>
          <p style={{color: '#EE993B'}}> Location </p>
          <MapContainer>
            <Map
              google={this.props.google}
              zoom={14}
              style={{
                width: window.innerWidth - 20,
                height: 300
              }}
              initialCenter={{
              lat: -1.2884,
              lng: 36.8233
              }}
            />
          </MapContainer>
        </Location>
        <MileRange>
          <p style={{color: '#EE993B'}}> Rango de millas </p>
          <Slider range defaultValue={[20, 50]} />
        </MileRange>
        <ButtonsWrapper>
          <LoginButton style={{backgroundColor: 'gray'}}>
            <LoginButtonText> Restablecer </LoginButtonText>
          </LoginButton>
          <LoginButton>
            <LoginButtonText> Aplicar </LoginButtonText>
          </LoginButton>
        </ButtonsWrapper>
      </MainContainer>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCNUVMEuum1nbB3aDSVzC3eDb9LrWuI9_g'
})(AppMenu);