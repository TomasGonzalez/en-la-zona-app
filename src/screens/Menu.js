import React, { PureComponent } from "react";
import { Menu, Button, Slider } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import Map, { GoogleApiWrapper, Circle } from "google-maps-react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "redux";

const triangleCoords = [
  { lat: 25.774, lng: -80.19 },
  { lat: 18.466, lng: -66.118 },
  { lat: 32.321, lng: -64.757 },
  { lat: 25.774, lng: -80.19 }
];

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
  background-color: #ee993b;
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
    selectedCategory: "",
    mileRange: [0, 50]
  };

  onSelectCategory = val => {
    this.setState({ selectedCategory: val.target.value });
    localStorage.setItem("category", JSON.stringify(val.target.value));
    this.props.update();
  };

  componentDidMount = () => {
    if (localStorage.getItem("category")) {
      this.setState({
        selectedCategory: JSON.parse(localStorage.getItem("category"))
      });
    }
  };

  handleMileRange = value => {
    this.setState({ mileRange: value });
    localStorage.setItem("mileRange", JSON.stringify(value));
  };

  render() {
    console.log("JSON, parse:", JSON.parse(localStorage.getItem("category")));
    console.log(this.props.data.categorias);
    console.log("state: ", this.state.selectedCategory);

    if (!this.props.data.categorias) {
      return <div>Loading</div>;
    }

    const renderData = [
      { idCategoria: "0", nombre: "Ninguna" },
      ...this.props.data.categorias
    ];
    return (
      <MainContainer>
        <div style={{ paddingLeft: 20, paddingRight: 20, width: "100%" }}>
          <Select
            value={this.state.selectedCategory}
            onChange={this.onSelectCategory}
            style={{ width: "100%" }}
            renderValue={() => this.state.selectedCategory.nombre}
          >
            {renderData.map(item => {
              return (
                <MenuItem value={item} style={{ backgroundColor: "white" }}>
                  {item.nombre}
                </MenuItem>
              );
            })}
          </Select>
        </div>
        {/* <PriceRange>
          <p style={{color: '#EE993B'}}> Rango de precio </p>
          <Slider range defaultValue={[20, 50]} />
        </PriceRange> */}
        <Location>
          <p style={{ color: "#EE993B", paddingLeft: 20 }}> Location </p>
          <Map
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={() => console.log("loaded?")}
            google={this.props.google}
            zoom={-this.state.mileRange[1] / 10 + 20}
            style={{
              width: 300,
              height: 250
            }}
            initialCenter={{
              lat: 18.472341,
              lng: -69.8866
            }}
          />
        </Location>
        <MileRange>
          <p style={{ color: "#EE993B" }}> Rango de millas </p>
          <Slider
            range
            defaultValue={this.state.mileRange}
            onChange={this.handleMileRange}
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
    );
  }
}

const query = gql`
  query {
    categorias {
      idCategoria
      nombre
    }
  }
`;

export default compose(
  GoogleApiWrapper({ apiKey: "AIzaSyCNUVMEuum1nbB3aDSVzC3eDb9LrWuI9_g" }),
  graphql(query)
)(AppMenu);
