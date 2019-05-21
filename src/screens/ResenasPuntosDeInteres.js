import React, { PureComponent } from "react";
import styled from "styled-components";

import Modal from "@material-ui/core/Modal";

import qs from "query-string";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "redux";
import { relativeTimeRounding } from "moment";

import MdPerson from "react-ionicons/lib/MdPerson";
import Sad from "react-ionicons/lib/IosSadOutline";
import Happy from "react-ionicons/lib/IosHappyOutline";

import ModalAgregarResenaPuntoDeInteres from "./ModalAgregarResenaPuntoDeInteres";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #ecf2f7;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 40px;
  min-width: 300px;
  position: fixed;
  padding-top: 10px;
  margin-top: 15px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 5px #eeeeee;
`;

const Messages = styled.div`
  background-color: white;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const IconBottons = styled.div`
  display: flex;
  width: 180px;
  margin-top: 40px;
  justify-content: space-between;
  align-items: space-between;
  margin-bottom: 30px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4b98f4;
  height: 40px;
  width: 80%;
  border-radius: 15px;
  color: white;
  position: fixed;
  bottom: 10px;
  z-index: 1000;
`;

class ResenasPuntosDeInteres extends PureComponent {
  state = {
    openOptions: false
  };

  render() {
    if (!this.props.data.puntoDeInteres) {
      return (
        <div style={{ backgroundColor: "white", height: "100%" }}>Cargando...</div>
      );
    }

    return (
      <MainContainer>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openOptions}
          onClose={() => this.setState({ openOptions: false })}
          style={{
            height: "80%",
            padding: 50
          }}
        >
          <ModalAgregarResenaPuntoDeInteres
            close={() => {
              this.setState({ openOptions: false });
              this.props.data.refetch();
            }}
          />
        </Modal>

        <TitleBar>
          <p
            style={{
              width: "100%",
              textAlign: "center",
              borderLeftColor: "#EE993B",
              borderLeftWidth: 2,
              borderLeftStyle: "solid",
              borderRightColor: "#EE993B",
              borderRightWidth: 2,
              borderRightStyle: "solid"
            }}
          >
            {this.props.data.puntoDeInteres.nombre}
          </p>
        </TitleBar>
        <div style={{ marginTop: 100 }} />
        {this.props.data.puntoDeInteres.resenas.edges.map(item => {
          return (
            <Messages>
              {item.node.usuario.urlFotoMiniatura ? (
                <img
                  alt=""
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 70,
                    backgroundColor: "#C3DFFA",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 50
                  }}
                  src={item.node.usuario.urlFotoMiniatura}
                />
              ) : (
                <div
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 70,
                    backgroundColor: "#C3DFFA",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 50
                  }}
                >
                  <MdPerson fontSize="40px" color="#90BEF8" />
                </div>
              )}
              {item.node.usuario.nombreDeUsuario && (
                <div style={{ marginTop: 20 }}>
                  @{item.node.usuario.nombreDeUsuario}
                </div>
              )}
              <div style={{ marginTop: 50 }}>{item.node.contenido}</div>

              <IconBottons>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Happy fontSize="40px" color="#597B6A" />
                  <div>Me ayudó</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Sad fontSize="40px" color="#DE9C4C" />
                  <div>No me ayudó</div>
                </div>
              </IconBottons>
            </Messages>
          );
        })}
        <Footer
          onClick={() => {
            this.setState({ openOptions: true });
          }}
        >
          Agregar
        </Footer>
      </MainContainer>
    );
  }
}

const query = gql`
  query($id: Int!) {
    puntoDeInteres(id: $id) {
      nombre
      foto
      latitud
      longitud
      direccionCalle1
      descripcionCorta
      resenas {
        edges {
          node {
            idResena
            idResena
            idUsuario
            idPuntoDeInteres
            contenido
            fechaDeCreacion
            fueEditada
            idCalificacion
            calificacion {
              idCalificacion
              valor
            }
            usuario {
              idUsuario
              primerNombre
              segundoNombre
              apellido
              nombreDeUsuario
              urlFotoMiniatura
            }
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
          id: qs.parse(window.location.search).id
        }
      };
    }
  })
)(ResenasPuntosDeInteres);
