import React, { Component } from "react";
import logo from "../assets/main-logo.png";
import styled from "styled-components";

import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "redux";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const InputField = styled.div`
  width: 100%;
  align-items: space-between;
`;

const Input = styled.input`
  width: 100%;
  border-color: #90bef8;
  border-radius: 0;
  border-width: 0;
  border-bottom-width: 1px;
  padding-bottom: 15px;
  padding-left: 5px;
`;

const Logo = styled.img`
  height: 150px;
  width: 150px;
`;

const GoogleLogo = styled.button`
  display: flex;
  margin-top: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: #d3e7fb;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background-color: white;
  justify-content: center;
`;

const GoogleLogoText = styled.p`
  color: #e1d34a;
  font-weight: bold;
`;

const LoginButton = styled.button`
  display: flex;
  margin-top: 20px;
  width: 100%;
  height: 50px;
  background-color: #ee993b;
  justify-content: center;
`;

const LoginButtonText = styled.p`
  color: white;
`;

class SignUp extends Component {
  state = {
    name: null,
    email: null,
    password: null,
    rPassword: null,
    error: null
  };

  handleSubmit = async () => {
    let error = null;
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.state.password !== this.state.rPassword) {
      error = "La contraseña no coincide";
    }

    if (!re.test(this.state.email)) {
      error = "El email no es valido";
    }

    if (!error) {
      try {
        const response = await this.props.mutate({
          variables: {
            email: this.state.email,
            claveDeUsuario: this.state.password,
            nombre: this.state.name
          }
        });
        localStorage.setItem(
          "user",
          response.data.crearUsuarioActivo.accessToken
        );
        this.props.history.push("/");
      } catch (err) {
        console.log("there was an error", err);
        return;
      }
    }

    this.setState({ error: error });
  };

  render() {
    return (
      <MainContainer>
        <Logo src={logo} />
        <FormContainer>
          <InputField>
            <p style={{ color: "#9D9D9D" }}>Name</p>
            <Input
              onChange={text => {
                this.setState({ name: text.target.value });
              }}
              type="text"
            />
          </InputField>
          <InputField class="inputField">
            <p style={{ color: "#9D9D9D" }}>Email</p>
            <Input
              onChange={text => {
                this.setState({ email: text.target.value });
              }}
              type="text"
            />
          </InputField>
          <InputField class="inputField">
            <p style={{ color: "#9D9D9D" }}>Password</p>
            <Input
              onChange={text => {
                this.setState({ password: text.target.value });
              }}
              type="password"
              name="password"
            />
          </InputField>
          <InputField class="inputField">
            <p style={{ color: "#9D9D9D" }}>Repete password</p>
            <Input
              onChange={text => {
                this.setState({ rPassword: text.target.value });
              }}
              type="password"
              name="password"
            />
          </InputField>
          <LoginButton onClick={this.handleSubmit}>
            <LoginButtonText>Sign Up</LoginButtonText>
          </LoginButton>
          <div style={{ color: "red", fontWeight: "bold", margintop: 20 }}>
            {this.state.error && this.state.error}
          </div>
        </FormContainer>
      </MainContainer>
    );
  }
}

const mutation = gql`
  mutation($claveDeUsuario: String!, $email: String!, $nombre: String) {
    crearUsuarioActivo(
      claveDeUsuario: $claveDeUsuario
      email: $email
      primerNombre: $nombre
    ) {
      accessToken
    }
  }
`;

export default compose(graphql(mutation))(SignUp);
