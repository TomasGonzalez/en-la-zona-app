import React, { PureComponent } from "react";
import styled from "styled-components";
import moment from "moment";
import IosThumbsUp from "react-ionicons/lib/IosThumbsUp";
import IosThumbsDown from "react-ionicons/lib/IosThumbsDown";

import qs from "query-string";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "redux";

import MdPerson from "react-ionicons/lib/MdPerson";

import Arrow from "react-ionicons/lib/MdArrowRoundForward";

const MainContainer = styled.div`
  height: 100vh;
  background-color: #c3dffa;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 60px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

class DetalleMomentoPuntoDeInteres extends PureComponent {
  state = {
    newComment: null
  };

  render() {
    if (!this.props.data.momentos) {
      return <div>Loading...</div>;
    }

    console.log(this.props.data.momentos[0]);
    const item = this.props.data.momentos[0];
    console.log(moment(item.fechaDeCreacion).fromNow());

    return (
      <MainContainer>
        <ItemContainer>
          <Header>
            <div
              style={{
                display: "flex"
              }}
            >
              {item.usuario.urlFotoMiniatura ? (
                <img
                  alt=""
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 30,
                    backgroundColor: "#C3DFFA"
                  }}
                  src={item.usuario.urlFotoMiniatura}
                />
              ) : (
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
              )}
              <p style={{ color: "#4B98F4" }}>
                @{item.usuario.nombreDeUsuario && item.usuario.nombreDeUsuario}
              </p>
            </div>
            <div style={{ color: "#F7C636", fontWeight: "bold" }}>
              {moment(item.fechaDeCreacion).fromNow()}
            </div>
          </Header>
          <img style={{ width: "100%" }} src={item.multimedia} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              padding: 10
            }}
          >
            <div>En la zona</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: 5
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <IosThumbsUp color={"#4B98F4"} />
                <p style={{ fontSize: 8, color: "#4B98F4", marginTop: 5 }}>
                  {item.likes}
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <IosThumbsDown color={"#EB4826"} />
                <p style={{ fontSize: 8, color: "#EB4826", marginTop: 5 }}>
                  {item.dislikes}
                </p>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#4797F4" }}>{item.descripcion}</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input placeholder="Type your comment" style={{ width: "100%" }} />
            <div
              onClick={() => {
                console.log("good mithical morning");
              }}
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              <Arrow fontSize="20px" color="#90BEF8" />
            </div>
          </div>
          {item.comentarios.edges.map(() => {
            return (
              <div
                style={{
                  backgroundColor: "#4797F4",
                  padding: 10,
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                {item.usuario.urlFotoMiniatura ? (
                  <img
                    alt=""
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 30,
                      backgroundColor: "#C3DFFA"
                    }}
                    src={item.usuario.urlFotoMiniatura}
                  />
                ) : (
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
                )}
                <div>@ helel</div>
              </div>
            );
          })}
        </ItemContainer>
      </MainContainer>
    );
  }
}

const query = gql`
  query($idMomento: Int!) {
    momentos(idMomento: $idMomento) {
      usuario {
        email
        nombreDeUsuario
        urlFotoMiniatura
      }
      comentarios {
        edges {
          node {
            idComentario
          }
        }
      }
      idMomento
      multimedia
      descripcion
      likes
      dislikes
      fechaDeCreacion
    }
  }
`;

export default compose(
  graphql(query, {
    options: props => {
      return {
        variables: {
          idMomento: qs.parse(window.location.search).id
        }
      };
    }
  })
)(DetalleMomentoPuntoDeInteres);
