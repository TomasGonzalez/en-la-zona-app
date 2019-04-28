import React, { PureComponent } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import InterestDescription from './InterestDescription';
import MomentosPDI from './MomentosPDI';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
`;


const TabContainer = ({ children, dir }) => {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

class ModalDescription extends PureComponent {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {    
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render () {
    const { theme } = this.props;
    return (
      <MainContainer>
        <AppBar position="sticky" color="default">
          <Tabs
            style={{backgroundColor: 'white'}}
            value={this.state.value}
            onChange={this.handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#EE993B"
              }
            }}
            variant="fullWidth"
            inkBarStyle={{background: 'green'}}
          >
            <Tab label="Descripcion" />
            <Tab label="Momentos" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          style={{overflow: !this.state.value ? 'hidden': 'scroll', scrollTop:'50'}}
        >
        <InterestDescription value={this.state.value} modalInfo={this.props.modalInfo}/>
        <MomentosPDI/>
      </SwipeableViews>
    </MainContainer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ModalDescription)