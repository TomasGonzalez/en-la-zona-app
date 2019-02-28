import React, { Component } from 'react';
import logo from '../assets/main-logo.png';
import styled from 'styled-components'

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
  border-color: #90BEF8;
  border-width: 0;
  border-bottom-width: 1px;
  padding-bottom: 15px;
  padding-left: 5px;
`;

const Logo = styled.img`
  height: 150px;
  width: 150px';
`;

export default class Login extends Component {
  render () {
    return (
      <MainContainer>
        <h1>En La Zona</h1>
        <Logo src={logo}/>
        <FormContainer>
          <InputField>
            <p>Email</p> 
            <Input type="text" name="fname"/>
          </InputField>
          <InputField class="inputField">
            <p>Password</p> 
            <Input type="text" name="fname"/>
          </InputField>
        </FormContainer>
      </MainContainer>
    );
  }
}