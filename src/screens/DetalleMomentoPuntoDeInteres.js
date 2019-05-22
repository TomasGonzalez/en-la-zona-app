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
import { throwServerError } from "apollo-link-http-common";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
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
    newComment: null,
    error: null
  };

  handleSubmitComment = async () => {
    if (this.state.newComment) {
      try {
        const response = await this.props.mutate({
          variables: {
            contenido: this.state.newComment,
            idMomentoPadre: qs.parse(window.location.search).id,
            token: localStorage.getItem("user")
          }
        });

        this.setState({ newComment: "" });
        this.props.data.refetch();
        console.log(response);
      } catch (err) {
        console.log("there was an error", err);
        return;
      }
    } else {
      this.setState({ error: "Debe añadir un comentario" });
    }
  };

  render() {
    if (!this.props.data.momentos) {
      return <div>Cargando...</div>;
    }

    const item = this.props.data.momentos[0];

    return (
      <MainContainer>
        <div style={{ color: "red" }}>{this.state.error}</div>
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
                    backgroundColor: "#ffffff"
                  }}
                  src={item.usuario.urlFotoMiniatura}
                />
              ) : (
                <div
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 30,
                    backgroundColor: "#ffffff",
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
            <div />
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
          <div
            style={{
              backgroundColor: "#F0F0F0",
              padding: 10
            }}
          >
            {item.descripcion}
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              value={this.state.newComment}
              onChange={text => {
                this.setState({ newComment: text.target.value });
              }}
              placeholder="Type your comment"
              style={{ width: "100%" }}
            />
            <div
              onClick={this.handleSubmitComment}
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              <Arrow fontSize="20px" color="#90BEF8" />
            </div>
          </div>
          {item.comentarios.edges.map(comment => {
            return (
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
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
                  <div style={{ paddingLeft: 10 }}>
                    <div>
                      @
                      {comment.node.usuario.nombreDeUsuario
                        ? comment.node.usuario.nombreDeUsuario
                        : "The man with no name"}
                    </div>
                    {comment.node.contenido}
                  </div>
                </div>
              </div>
            );
          })}
        </ItemContainer>
        <div
          style={{
            backgroundColor: "red",
            height: 100,
            marginTop: 0,
            position: "absolute"
          }}
        />
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
            contenido
            usuario {
              email
              nombreDeUsuario
              urlFotoMiniatura
            }
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

const mutation = gql`
  mutation($contenido: String!, $idMomentoPadre: Int!, $token: String!) {
    crearComentario(
      contenido: $contenido
      idMomentoPadre: $idMomentoPadre
      token: $token
    ) {
      comentario {
        idComentario
      }
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
  }),
  graphql(mutation)
)(DetalleMomentoPuntoDeInteres);
