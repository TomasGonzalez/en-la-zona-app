import React, { PureComponent } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 200px;
`;

class SideBar extends PureComponent {
  render () {
    return (
      <MainContainer>
        <div style={{height: 100}}>
        </div>
        <p>this is the sidebar</p>
      </MainContainer>
    )
  }
}

export default SideBar;