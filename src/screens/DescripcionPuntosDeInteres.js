import React, { PureComponent } from "react";
import styled from "styled-components";
import MdArrowForward from "react-ionicons/lib/MdArrowForward";

import qs from "query-string";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "redux";

import MdPerson from "react-ionicons/lib/MdPerson";

const TitleBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 40px;
  padding-top: 10px;
  margin-top: 15px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 5px #eeeeee;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  overflow: hidden;
`;

const ActiveTabs = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  background-color: white;
`;

const Active = styled.div`
  border-bottom: solid 3px #de9c4c;
  padding-top: 4px;
  padding-bottom: 4px;
`;

const image =
  "https://zone-trt-bhxtb9xxzrrdpzhqr.netdna-ssl.com/wp-content/uploads/2017/06/sugar-club-bangkok-860x572.jpg";

class InterestDescription extends PureComponent {
  state = {
    seeMore: false
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.value) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    if (!this.props.data.puntoDeInteres) {
      return (
        <div style={{ backgroundColor: "white", height: "100%" }}>Loading</div>
      );
    }

    return (
      <MainContainer>
        <ActiveTabs>
          <Active>Descripcion</Active>
          <div
            onClick={() =>
              this.props.history.push(
                `/MomentosPuntosDeInteres?id=${
                  qs.parse(window.location.search).id
                }`
              )
            }
          >
            Momentos
          </div>
          <div
            onClick={() =>
              this.props.history.push(
                `/EventosPuntosDeInteres?id=${
                  qs.parse(window.location.search).id
                }`
              )
            }
          >
            Eventos
          </div>
        </ActiveTabs>
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
        <img
          style={{ height: 150, width: "100%", marginTop: 20 }}
          src={this.props.data.puntoDeInteres.foto}
        />
        <div
          onClick={() => this.setState({ seeMore: !this.state.seeMore })}
          style={{
            display: "flex",
            flexDirection: "column",
            height: 40,
            backgroundColor: "#EFD1A5",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 15
          }}
        >
          <p style={{ color: "#4797F4" }} fontSize="60px">
            {" "}
            {!this.state.seeMore ? "Ver informacion" : "Mostrar menos"}{" "}
          </p>
        </div>
        {this.state.seeMore && (
          <div style={{ backgroundColor: "#f2f2f2", height: 50, padding: 10 }}>
            <p style={{ fontSize: 10 }}>
              "{this.props.data.puntoDeInteres.descripcionCorta}"
            </p>
          </div>
        )}
        <div
          onClick={() =>
            window.open(
              `https://maps.google.com/maps?daddr=${
                this.props.data.puntoDeInteres.latitud
              },${this.props.data.puntoDeInteres.longitud}&amp;ll=`
            )
          }
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            alignItems: "center",
            marginTop: 20,
            paddingLeft: 10,
            paddingRight: 10
          }}
        >
          <div>
            Como llegar aqui: {<br />}{" "}
            {this.props.data.puntoDeInteres.direccionCalle1} {<br />}
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#4797F4",
              height: 30,
              width: 30,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <MdArrowForward fontSize={15} color="white" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#f2f2f2",
            alignItems: "center",
            marginTop: 20,
            padding: 10
          }}
        >
          <div style={{ flex: 1 }}>
            <div>
              <p>Reseña</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {this.props.data.puntoDeInteres.resenas.edges
                .slice(0, 3)
                .map(item => {
                  if (item.node.usuario.urlFotoMiniatura) {
                    return (
                      <img
                        alt=""
                        style={{
                          height: 30,
                          width: 30,
                          borderRadius: 30,
                          backgroundColor: "#C3DFFA"
                        }}
                        src={item.node.usuario.urlFotoMiniatura}
                      />
                    );
                  }

                  return (
                    <div
                      style={{
                        height: 30,
                        width: 30,
                        borderRadius: 30,
                        backgroundColor: "#C3DFFA",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <MdPerson fontSize="20px" color="#90BEF8" />
                    </div>
                  );
                })}
            </div>
          </div>
          <div>
            <p style={{ fontSize: 9 }}>
              {this.props.data.puntoDeInteres.totalResenas} reviews
            </p>
            <div
              onClick={() =>
                this.props.history.push(
                  `/ResenasPuntosDeInteres?id=${
                    qs.parse(window.location.search).id
                  }`
                )
              }
              style={{
                display: "flex",
                backgroundColor: "#4797F4",
                height: 30,
                paddingTop: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
                color: "white"
              }}
            >
              <p style={{ paddingLeft: 10, paddingRight: 10 }}>ver más</p>
            </div>
          </div>
        </div>
      </MainContainer>
    );
  }
}

const query = gql`
  query($id: Int!) {
    puntoDeInteres(id: $id) {
      totalResenas
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
)(InterestDescription);
