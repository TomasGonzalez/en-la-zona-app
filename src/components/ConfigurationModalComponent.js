import React, { PureComponent } from 'react';
import Menu from '../screens/Menu';
import styled from 'styled-components';

const MainModalView = styled.div`
  background-color: white;
  width: 300px;
  position: absolute;
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