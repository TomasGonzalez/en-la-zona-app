import React, { PureComponent } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "redux";
import MdPerson from "react-ionicons/lib/MdPerson";

import InfiniteScroll from "react-infinite-scroller";

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

const MainContainer = styled.div`
  overflow: hide;
`;

const Header = styled.div`
  background-color: #323a50;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.div`
  height: 170px;
  width: 170px;
  background-color: white;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  height: 40px;
  background-color: #c8c8c8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5698e4;
  font-weight: bold;
  font-size: 15px;
`;

const Image = styled.img`
  border-radius: 50px;
  object-fit: cover;
`;

const Mommentoss = styled.div`
  overflow: scroll;
  padding-top: 240px;
`;

class EditarPerfil extends PureComponent {
  state = {
    end: false
  };

  loadFunction = async page => {
    console.log(page);

    this.props.data.fetchMore({
      variables: {
        pagina: page
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log("this is the fetchMore", fetchMoreResult);

        if (!fetchMoreResult) {
          this.setState({ end: true });
          return prev;
        }
        return Object.assign({}, prev, {
          momentos: [...prev.momentos, ...fetchMoreResult.momentos]
        });
      }
    });
    console.log(this.props.data);
  };

  render() {
    console.log(this.props.data);
    if (!this.props.data.usuario || !this.props.data.momentos) {
      return <div>Cargando...</div>;
    }
    return (
      <MainContainer>
        <div style={{ position: "fixed", zIndex: "10", width: "100%" }}>
          <Header>
            {this.props.data.usuario.urlFotoMiniatura ? (
              <Image
                src={this.props.data.usuario.urlFotoMiniatura}
                alt="Smiley face"
                height="170"
                width="170"
              />
            ) : (
              <ProfileImage>
                <MdPerson fontSize="120px" size={"large"} />
              </ProfileImage>
            )}
          </Header>
          <Name>{`${this.props.data.usuario.primerNombre}`}</Name>
        </div>
        <Mommentoss>
          <InfiniteScroll
            pageStart={1}
            loadMore={this.loadFunction}
            hasMore={!this.state.end}
            loader={
              this.state.end ? <div /> : <div className="loader" key={0} />
            }
          >
            {this.props.data.momentos.map(item => {
              return (
                <div>
                  <div
                    style={{ height: 150, width: "100%" }}
                    onClick={() =>
                      this.props.history.push(
                        `/DetalleMomentoPuntoDeInteres?id=${item.idMomento}`
                      )
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
                    {/* <div
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
                </div> */}
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
          </InfiniteScroll>
        </Mommentoss>
      </MainContainer>
    );
  }
}

const query = gql`
  query($token: String!, $pagina: Int) {
    momentos(porPagina: 10, pagina: $pagina, token: $token) {
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
    usuario(token: $token) {
      idUsuario
      primerNombre
      segundoNombre
      apellido
      nombreDeUsuario
      perfilVisitante {
        idPerfilVisitante
        urlFotoPerfilVisitante
        biografiaVisitante
      }
      urlFotoMiniatura
      momentos {
        edges {
          node {
            multimedia
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
          token: localStorage.getItem("user")
        }
      };
    }
  })
)(EditarPerfil);
