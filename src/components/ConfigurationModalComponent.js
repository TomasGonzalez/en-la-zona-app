import React, { PureComponent } from 'react';
import Menu from '../screens/Menu';
import styled from 'styled-components';

const MainModalView = styled.div`
  background-color: white;
  width: 300px;
  height: 600px;
  position: absolute;
  overflow: scroll;
`;

class ConfigurationModalComponent extends PureComponent {

  render () {
    return (
      <MainModalView>
        <Menu/>
      </MainModalView>
    )
  }
}

export default ConfigurationModalComponent;