import React, { Component } from "react";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import ModalDescription from "../components/ModalDescription";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "redux";
import { geolocated } from "react-geolocated";
import { log } from "util";

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const SearchBar = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 4px 7px #eeeeee;
  height: 25px;
  width: 300px;
`;

const Header = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  background-color: white;
  border-color: #eeeeee;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  justify-content: center;
  align-items: center;
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1000;
`;

const MainBodyContainer = styled.div`
  padding-horizontal: 20px;
  padding-top: 12px;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #ee993b;
  border-bottom-width: 4px;
  border-bottom-style: solid;
  width: 100%;
  height: 30px;
  padding-top: 15px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  height: 60px;
  width: 80%;
  border-radius: 15px;
  box-shadow: 0px 4px 5px #eeeeee;

  position: fixed;
  bottom: 10px;
  z-index: 1000;
`;

let texts = "";

let setCategory = { idCategoria: 0 };

class PuntosDeInteres extends Component {
  state = {
    openOptions: false,
    modalInfo: {},
    searchText: ""
  };

  componentWillReceiveProps(nextProps) {
    if (localStorage.getItem("category")) {
      setCategory = JSON.parse(localStorage.getItem("category"));
    }
  }

  render() {
    if (!this.props.data.puntosDeInteres) {
      return <div>Loading</div>;
    }

    // if (!this.props.isGeolocationEnabled) {
    //   return <div>turn the location please</div>;
    // }

    return (
      <MainContainer>
        {/* <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openOptions}
          onClose={() => this.setState({ openOptions: false })}
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: 20
          }}
        >
          <ModalDescription modalInfo={this.state.modalInfo} />
        </Modal> */}
        <Header>
          <SearchBar>
            <input
              onChange={item =>
                this.props.data.refetch({ nombre: item.target.value })
              }
              placeholder="Buscar"
              type="text"
              name="search"
              style={{ borderColor: "transparent", width: "100%" }}
            />
          </SearchBar>
        </Header>
        <SubTitle>
          <p style={{ fontSize: 14 }}>Puntos de interes</p>
        </SubTitle>
        <MainBodyContainer>
          <div
            style={{
              backgroundColor: "white",
              paddingLeft: 20,
              paddingRight: 20,
              marginBottom: 140,
              marginTop: 10
            }}
          >
            {this.props.data.puntosDeInteres.map(item => {
              return (
                <div
                  onClick={() =>
                    this.props.history.push(
                      `DescripcionPuntosDeInteres?id=${item.idPuntoDeInteres}`
                    )
                  }
                  style={{
                    height: 150,
                    marginTop: 10,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    marginBottom: 70
                  }}
                >
                  <img
                    style={{
                      height: 150,
                      width: "100%",
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      objectFit: "cover"
                    }}
                    src={item.foto}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      backgroundColor: "#E4E4E4",
                      paddingLeft: 20,
                      paddingTop: 5
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>
                      {item.nombre}
                      <br />
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        {item.direccionCalle1}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </MainBodyContainer>
        <Footer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <p style={{ fontSize: 10 }}>50</p>
            <p style={{ fontSize: 7 }}>Eventos cercanos</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <p style={{ fontSize: 10 }}>250</p>
            <p style={{ fontSize: 7 }}>Negocios cercanos</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <p style={{ fontSize: 10 }}>40</p>
            <p style={{ fontSize: 7 }}>Momentos nuevos</p>
          </div>
        </Footer>
      </MainContainer>
    );
  }
}

const query = gql`
  query($nombre: String!, $categoria: Int!) {
    puntosDeInteres(
      nombre: $nombre
      pagina: 1
      porPagina: 20
      categoria: $categoria
    ) {
      nombre
      foto
      latitud
      longitud
      direccionCalle1
      descripcionCorta
      idPuntoDeInteres
    }
  }
`;

export default compose(
  geolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
  }),
  graphql(query, {
    options: props => {
      return {
        variables: {
          nombre: "",
          categoria: parseInt(setCategory.idCategoria)
        }
      };
    }
  })
)(PuntosDeInteres);
