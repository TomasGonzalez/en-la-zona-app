import React, { PureComponent } from 'react';
import styled from 'styled-components';
import IosMenuOutline from 'react-ionicons/lib/IosMenuOutline';
import IosOptionsOutline from 'react-ionicons/lib/IosOptionsOutline';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
`;

class AppBarComponent extends PureComponent {
  render () {
    return (
      <MainContainer>
        <IosMenuOutline 
          onClick={()=>this.props.handleOpenBar(true)}
          />
        <IosOptionsOutline 
          onClick={()=>this.props.handleOpenOptions(true)}
          />
      </MainContainer>
    )
  }
}

export default AppBarComponent;