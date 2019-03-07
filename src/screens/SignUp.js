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
  border-color: #D3E7FB;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background-color: white;
  justify-content: center;
`;

const GoogleLogoText = styled.p`
  color: #E1D34A;
  font-weight: bold;
`

const LoginButton = styled.button`
  display: flex;
  margin-top: 20px;
  width: 100%;
  height: 50px;
  background-color: #EE993B;
  justify-content: center;
`;

const LoginButtonText = styled.p`
  color: white;
`;

export default class SignUp extends Component {
  render () {
    return (
      <MainContainer>
        <Logo src={logo}/>
        <FormContainer>
          <InputField>
            <p style={{color: "#9D9D9D"}}>Name</p> 
            <Input type="text" name="fname"/>
          </InputField>
          <InputField class="inputField">
            <p style={{color: "#9D9D9D"}}>Email</p> 
            <Input type="text" name="fname"/>
          </InputField>
          <InputField class="inputField">
            <p style={{color: "#9D9D9D"}}>Password</p> 
            <Input type="text" name="fname"/>
          </InputField>
          <InputField class="inputField">
            <p style={{color: "#9D9D9D"}}>Repete password</p> 
            <Input type="text" name="fname"/>
          </InputField>
          <LoginButton>
            <LoginButtonText>Sugn Up</LoginButtonText>
          </LoginButton>
        </FormContainer>
      </MainContainer>
    );
  }
}