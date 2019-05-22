import React, { Component } from "react";
import styled from "styled-components";
import { Rate } from "antd";

import qs from "query-string";

import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "redux";

const MainView = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const AddItem = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4b98f4;
  width: 100%;
  border-radius: 30px;
  margin-top: 40px;
  height: 30px;
`;

class ModalAgregarResenaPuntoDeInteres extends Component {
  state = {
    rate: null,
    comentario: null,
    error: null
  };

  handleSubmit = async () => {
    if (this.state.comentario && this.state.rate) {
      try {
        const response = await this.props.mutate({
          variables: {
            valorCalificacion: this.state.rate,
            contenido: this.state.comentario,
            idPuntoDeInteres: qs.parse(window.location.search).id,
            token: localStorage.getItem("user")
          }
        });
        console.log("this is response", response);
        this.props.close();
      } catch (err) {
        console.log("there was an error", err);
        return;
      }
    } else {
      this.setState({
        error: "Debe incluir un comentario y una calificación"
      });
    }
  };

  render() {
    return (
      <MainView>
        <div style={{ width: "100%" }}>
          <h2> Reseñas: </h2>
          <div>Escriba su comentario: </div>
          <textarea
            onChange={item => this.setState({ comentario: item.target.value })}
            placeholder="Nos importa tu comentario:"
            style={{ height: 300, maxHeight: 300, width: "100%" }}
            maxlength={150}
          />
          <div style={{ marginTop: 10 }}>
            <Rate
              onChange={item => this.setState({ rate: item })}
              value={this.state.rate}
            />
          </div>
          <AddItem onClick={this.handleSubmit}>Enviar</AddItem>
          <div style={{ color: "red" }}>{this.state.error}</div>
        </div>
      </MainView>
    );
  }
}

const mutation = gql`
  mutation(
    $contenido: String!
    $valorCalificacion: Int!
    $idPuntoDeInteres: Int!
    $token: String!
  ) {
    crearResena(
      contenido: $contenido
      valorCalificacion: $valorCalificacion
      idPuntoDeInteres: $idPuntoDeInteres
      token: $token
    ) {
      resena {
        idResena
        idUsuario
      }
    }
  }
`;

export default compose(graphql(mutation))(ModalAgregarResenaPuntoDeInteres);
