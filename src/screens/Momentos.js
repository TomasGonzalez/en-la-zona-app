import React, { PureComponent } from "react";
import IosPerson from "react-ionicons/lib/IosPerson";
import IosThumbsUp from "react-ionicons/lib/IosThumbsUp";
import IosThumbsDown from "react-ionicons/lib/IosThumbsDown";
import styled from "styled-components";
import qs from "query-string";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "redux";
import MdPerson from "react-ionicons/lib/MdPerson";

const ActiveTabs = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  margin-bottom: 12px;
`;

const Active = styled.div`
  border-bottom: solid 3px #de9c4c;
  padding-top: 4px;
  padding-bottom: 4px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ee993c;
  height: 40px;
  width: 80px;
  border-radius: 30px;
  color: white;

  position: fixed;
  right: 10px;
  top: 50px;
  z-index: 1000;
`;

class MomentosPDI extends PureComponent {
  render() {
    if (!this.props.data.momentos) {
      return <div>Loading...</div>;
    }

    console.log(this.props.data.momentos);

    return (
      <div>
        {this.props.data.momentos.map(item => {
          return (
            <div>
              <div
                style={{ height: 150, width: "100%" }}
                onClick={() =>
                  (window.location = `/DetalleMomentoPuntoDeInteres?id=${
                    item.idMomento
                  }`)
                }
              >
                <img
                  style={{
                    position: "absolute",
                    height: 150,
                    width: "100%",
                    objectFit: "cover"
                  }}
                  src={item.multimedia}
                />
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    alignItems: "center"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 10
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
                      @
                      {item.usuario.nombreDeUsuario &&
                        item.usuario.nombreDeUsuario}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    height: 150,
                    position: "absolute",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    paddingRight: 10,
                    paddingBottom: 10
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      marginRight: 5
                    }}
                  >
                    <IosThumbsUp color={"#4B98F4"} />
                    <p style={{ fontSize: 8, color: "#4B98F4", marginTop: 5 }}>
                      {item.likes}
                    </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <IosThumbsDown color={"#EB4826"} />
                    <p style={{ fontSize: 8, color: "#EB4826", marginTop: 5 }}>
                      {item.dislikes}
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  minHeight: 30,
                  backgroundColor: "#F0F0F0",
                  padding: 10
                }}
              >
                <p>{item.descripcion}</p>
              </div>
            </div>
          );
        })}
        <Footer onClick={() => {}}>Agregar</Footer>
      </div>
    );
  }
}

const query = gql`
  query {
    momentos {
      usuario {
        email
        nombreDeUsuario
        urlFotoMiniatura
      }
      idMomento
      multimedia
      descripcion
      likes
      dislikes
    }
  }
`;

export default compose(graphql(query))(MomentosPDI);
