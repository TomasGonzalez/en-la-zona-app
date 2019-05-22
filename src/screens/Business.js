import React, { Component } from "react";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import ModalDescription from "../components/ModalDescription";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "redux";

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

class PuntosDeInteres extends Component {
  state = {
    openOptions: false,
    modalInfo: {},
    searchText: ""
  };

  render() {
    console.log(this.props.data);

    if (!this.props.data.usuarios) {
      return <div>Cargando...</div>;
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
        {!this.props.data.usuarios.length ? (
          <div style={{ padding: 20 }}>
            Actualmente no hay{" "}
            {localStorage.getItem("category") &&
              JSON.parse(localStorage.getItem("category")).nombre}
            . Con este nombre seleccione otra categoria en el menu en la parte
            superior derecha de la pantalla
          </div>
        ) : (
          <MainContainer>
            <SubTitle>
              <p style={{ fontSize: 14 }}>Negocios</p>
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
                {this.props.data.usuarios.map(item => {
                  return (
                    <div
                      onClick={() =>
                        this.props.history.push(
                          `BusinessPuntoDeInteres?id=${item.idUsuario}`
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
                          width: "100vw",
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          objectFit: "cover"
                        }}
                        src={item.urlFotoMiniatura}
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
                          {item.nombreDeUsuario}
                          <br />
                          Eventos:
                          <span
                            style={{ color: "black", fontWeight: "normal" }}
                          >
                            {item.eventos}
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </MainBodyContainer>
          </MainContainer>
        )}
      </MainContainer>
    );
  }
}

const query = gql`
  query($nombre: String!) {
    usuarios(idTipoUsuario: 3, nombreDeUsuario: $nombre) {
      idUsuario
      primerNombre
      urlFotoMiniatura
      nombreDeUsuario
    }
  }
`;

export default compose(
  graphql(query, {
    options: props => {
      return {
        variables: {
          nombre: ""
        }
      };
    }
  })
)(PuntosDeInteres);
