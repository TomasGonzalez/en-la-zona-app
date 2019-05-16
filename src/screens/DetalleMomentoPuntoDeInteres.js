import React, { PureComponent } from "react";
import styled from "styled-components";
import moment from "moment";

import qs from "query-string";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "redux";

import MdPerson from "react-ionicons/lib/MdPerson";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #c3dffa;
  padding-left: 10px;
  padding-right: 10px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 60px;
  height: 400px;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: red;
`;

class DetalleMomentoPuntoDeInteres extends PureComponent {
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
            <div>{moment(item.fechaDeCreacion).fromNow()}</div>
          </Header>
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
