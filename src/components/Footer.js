import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "redux";

const TFooter = styled.div`
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

function Footer(props) {
  console.log("data ", props.data);

  if (!props.data.ocurrenciasCercanas) {
    return <div>Loading...</div>;
  }

  console.log(props.data.ocurrenciasCercanas);

  return (
    <TFooter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <p style={{ fontSize: 10 }}>
          {props.data.ocurrenciasCercanas.eventosCercanos}
        </p>
        <p style={{ fontSize: 7 }}>Eventos cercanos</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <p style={{ fontSize: 10 }}>
          {props.data.ocurrenciasCercanas.negociosCercanos}
        </p>
        <p style={{ fontSize: 7 }}>Negocios cercanos</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <p style={{ fontSize: 10 }}>
          {props.data.ocurrenciasCercanas.momentosRecientes}
        </p>
        <p style={{ fontSize: 7 }}>Momentos nuevos</p>
      </div>
    </TFooter>
  );
}

const query = gql`
  query {
    ocurrenciasCercanas(latitud: 18.472031, longitud: -69.884542) {
      eventosCercanos
      negociosCercanos
      momentosRecientes
    }
  }
`;
export default compose(graphql(query))(Footer);
