import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
//import Events from "../onboardigImages/onboarding_eventos.svg";
import b from "../onboardigImages/2.jpeg";
import c from "../onboardigImages/3.jpeg";
import d from "../onboardigImages/4.jpeg";
import e from "../onboardigImages/5.jpeg";
import f from "../onboardigImages/6.jpeg";

import { createGlobalStyle } from "styled-components";

const StyledCarousel = styled(Carousel)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  overflow: hidden;
  background-color: rgba(30, 30, 30, 0.06);
`;

const StyledImage = styled.img`
  width: 100vw;
  border-radius: 100px;
  padding: 40px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const MainContainer = styled.div`
  background-color: rgba(30, 30, 30, 0.1);
  padding: 0px;
  margin: 0px;
`;

function OnBoarding() {
  return (
    <MainContainer>
      <StyledCarousel autoplay={true}>
        <StyledDiv>
          <StyledImage src={b} />
        </StyledDiv>
        <StyledDiv>
          <StyledImage src={c} />
        </StyledDiv>
        <StyledDiv>
          <StyledImage src={d} />
        </StyledDiv>
        <StyledDiv>
          <StyledImage src={e} />
        </StyledDiv>
        <StyledDiv>
          <StyledImage src={f} />
        </StyledDiv>
      </StyledCarousel>
    </MainContainer>
  );
}

export default OnBoarding;
