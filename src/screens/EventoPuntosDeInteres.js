import React, { PureComponent } from "react";

import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import ModalDescription from "../components/ModalDescription";

import qs from "query-string";
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

class EventoPuntosDeinteres extends PureComponent {
  state = {
    openOptions: false
  };

  render() {
    if (!this.props.data.eventos) {
      return <div>loading...</div>;
    }

    return (
      <MainContainer>
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
          <ModalDescription modalInfo={this.state.modalInfo} />
        </Modal>
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
          <p style={{ fontSize: 14 }}>Eventos</p>
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
            {this.props.data.eventos.map(item => {
              return (
                <div
                  style={{
                    height: 150,
                    marginTop: 10,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    marginBottom: 70
                  }}
                  onClick={() =>
                    this.setState({ openOptions: true, modalInfo: item })
                  }
                >
                  <img
                    style={{
                      height: 150,
                      width: "100%",
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      objectFit: "cover"
                    }}
                    src={item.urlImagenEvento && item.urlImagenEvento}
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
                      {item.titulo}
                      <br />
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        {item.puntoDeInteres &&
                          item.puntoDeInteres.direccionCalle1}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </MainBodyContainer>
      </MainContainer>
    );
  }
}

const query = gql`
  query($nombre: String!, $idPuntoDeInteres: Int!) {
    eventos(
      titulo: $nombre
      pagina: 1
      porPagina: 20
      idPuntoDeInteres: $idPuntoDeInteres
    ) {
      idEvento
      titulo
      concepto
      fechaDeCreacion
      fechaDeInicio
      fechaDeCierre
      urlImagenEvento
      requiereBoletas
      requiereCover
      precio
      multimedia
      puntoDeInteres {
        idPuntoDeInteres
        nombre
        direccionCalle1
        direccionCalle2
        descripcionLarga
        descripcionCorta
        latitud
        longitud
        confirmado
        activo
        fechaDeCreacion
        foto
        categorias {
          edges {
            node {
              nombre
            }
          }
        }
        resenas {
          edges {
            node {
              idResena
            }
          }
        }
        sugerencia {
          id
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
          nombre: "",
          idPuntoDeInteres: qs.parse(window.location.search).id
        }
      };
    }
  })
)(EventoPuntosDeinteres);
