import React, { PureComponent } from 'react';
import styled from 'styled-components';
import IosMenuOutline from 'react-ionicons/lib/IosMenuOutline';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  height: 40px;
  justify-content: center;
`;

class AppBarComponent extends PureComponent {
  render () {
    return (
      <MainContainer>
        <IosMenuOutline onClick={()=>this.props.handleOpenBar(true)}/>
      </MainContainer>
    )
  }
}

export default AppBarComponent;