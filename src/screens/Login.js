import React, { Component } from "react";
import logo from "../assets/main-logo.png";
import styled from "styled-components";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "redux";
import { Link } from "react-router-dom";

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
  justify-content: center;
  align-items: center;
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

class Login extends Component {
  state = {
    email: null,
    password: null,
    name: null,
    error: null
  };

  handleSubmit = async () => {
    try {
      const response = await this.props.mutate({
        variables: {
          email: this.state.email,
          clave: this.state.password
        }
      });
      localStorage.setItem("user", response.data.autorizarUsuario.accessToken);
      window.location = "/OnBoarding";
    } catch (err) {
      console.log(err);
      this.setState({ error: err.message.replace("GraphQL error:", "") });
      return;
    }
  };

  render() {
    return (
      <MainContainer>
        <h1>En La Zona </h1>
        <Logo src={logo} />
        <FormContainer>
          <InputField>
            <p style={{ color: "#9D9D9D" }}>Correo electrónico</p>
            <Input
              onChange={text => this.setState({ email: text.target.value })}
              type="email"
            />
          </InputField>
          <InputField class="inputField">
            <p style={{ color: "#9D9D9D" }}>Contraseña</p>
            <Input
              onChange={text => this.setState({ password: text.target.value })}
              type="password"
            />
          </InputField>
          <LoginButton onClick={this.handleSubmit}>
            <LoginButtonText>Iniciar sesión</LoginButtonText>
          </LoginButton>
          <Link to="/signUp/" style={{ marginTop: 30 }}>
            Registrarse
          </Link>
          <div style={{ color: "red", fontWeight: "bold", margintop: 20 }}>
            {this.state.error && this.state.error}
          </div>
        </FormContainer>
      </MainContainer>
    );
  }
}

const mutation = gql`
  mutation($clave: String, $email: String) {
    autorizarUsuario(clave: $clave, email: $email) {
      accessToken
    }
  }
`;

export default compose(graphql(mutation))(Login);
