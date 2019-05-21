import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "antd";
import { Button } from "antd";

import qs from "query-string";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "redux";

const { TextArea } = Input;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  margin: 20px;
  width: 100%;
  padding: 20px;
`;

const StyledImg = styled.img`
  width: 100%;
`;

function Modal(props) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await props.mutate({
        variables: {
          descripcion: text,
          multimedia: props.image,
          token: localStorage.getItem("user")
        }
      });
      props.close();
      console.log(response);
    } catch (err) {
      console.log("there was an error", err);
      setError("logueate alfarol");
      return;
    }
  };

  return (
    <MainContainer>
      <StyledImg src={props.image} />
      <TextArea
        placeholder="Descripcion"
        autosize={{ minRows: 2, maxRows: 6 }}
        style={{ marginTop: 20 }}
        onChange={value => setText(value.target.value)}
      />
      <Button
        style={{ width: "100%", marginTop: 20 }}
        onClick={handleSubmit}
        type="primary"
      >
        Subir momento
      </Button>
      <div style={{ color: "red" }}>{error}</div>
    </MainContainer>
  );
}

const mutation = gql`
  mutation($multimedia: String!, $descripcion: String!, $token: String!) {
    crearMomento(
      multimedia: $multimedia
      descripcion: $descripcion
      token: $token
    ) {
      momento {
        idMomento
      }
    }
  }
`;

export default compose(graphql(mutation))(Modal);
