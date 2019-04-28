import React, { PureComponent } from 'react';
import {
  Menu, 
  Button, 
  Slider
} from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import Map, { GoogleApiWrapper, Circle } from 'google-maps-react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const data = [
  "restaurantes",
  "heladerias",
  "turismo",
  "esculturas",
];

const triangleCoords = [
  {lat: 25.774, lng: -80.190},
  {lat: 18.466, lng: -66.118},
  {lat: 32.321, lng: -64.757},
  {lat: 25.774, lng: -80.190}
];

const menu = (
  <Menu>
    {data.map((item)=>{
      return (
        <MenuItem>
          <a target="_blank" rel="noopener noreferrer">{item}</a>
        </MenuItem>
      )})
    }
  </Menu>
);

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  justify-content: center;
`;

const PriceRange = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Location = styled.div`
  padding-top: 20px;
  height: 300px;
`;

const MileRange = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
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
  justify-content: space-around;
  padding-top: 30px;
`;

class AppMenu extends PureComponent {

  state = {
    open: false,
    dropdownOpen: false,
    selectedCategory: '',
    mileRange: [0, 50],
  }

  render () {
    return (
      <MainContainer>
        <div style={{paddingLeft: 20, paddingRight: 20, width: '100%'}} >
            <Select 
              value={this.state.selectedCategory}
              onChange={(val)=>this.setState({selectedCategory: val.target.value})}
              style={{width: '100%'}} >
              {data.map((item)=>{
                return (
                  <MenuItem value={item} style={{backgroundColor: 'white'}}>
                    {item}
                  </MenuItem>
                )})
              }
          </Select>
        </div>
        {/* <PriceRange>
          <p style={{color: '#EE993B'}}> Rango de precio </p>
          <Slider range defaultValue={[20, 50]} />
        </PriceRange> */}
        <Location>
          <p style={{color: '#EE993B', paddingLeft: 20}}> Location </p>
            <Map
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={() => console.log('loaded?')} 
              google={this.props.google}
              zoom={((-this.state.mileRange[1] / 10) + 20)}
              style={{
                width: 300,
                height: 250
              }}
              initialCenter={{
              lat: 18.472341,
              lng: -69.886600
              }}
            />
        </Location>
        <MileRange>
          <p style={{color: '#EE993B'}}> Rango de millas </p>
          <Slider 
            range 
            defaultValue={this.state.mileRange} 
            onChange={value=>this.setState({mileRange: value})}
          />
        </MileRange>
        <ButtonsWrapper>
          {/* <LoginButton style={{backgroundColor: 'gray'}}>
            <LoginButtonText> Restablecer </LoginButtonText>
          </LoginButton>
          <LoginButton>
            <LoginButtonText> Aplicar </LoginButtonText>
          </LoginButton> */}
        </ButtonsWrapper>
      </MainContainer>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCNUVMEuum1nbB3aDSVzC3eDb9LrWuI9_g'
})(AppMenu);