import React,{ PureComponent } from 'react';

import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import ModalDescription from '../components/ModalDescription';

const data = [
  {
    image: "https://dl1.cbsistatic.com/i/r/2018/08/09/b6ca69f8-f123-408c-9b1f-ea3f9cf1fb17/resize/620xauto/8787947d1d00135d3f2ed512e56bee72/concert-crowd.jpg",
    title: "Pois",
    ubicacion: "calle 13"
  },
  {
    image: "https://cdn.thewirecutter.com/wp-content/uploads/2017/09/picnicsgrilling-2x1-fullres-top-1024x512.jpg",
    title: "Pois",
    ubicacion: "calle 13"
  },
  {
    image: "https://dl1.cbsistatic.com/i/r/2018/08/09/b6ca69f8-f123-408c-9b1f-ea3f9cf1fb17/resize/620xauto/8787947d1d00135d3f2ed512e56bee72/concert-crowd.jpg",
    title: "Pois",
    ubicacion: "calle 13"
  },
  {
    image: "https://cdn.thewirecutter.com/wp-content/uploads/2017/09/picnicsgrilling-2x1-fullres-top-1024x512.jpg",
    title: "Pois",
    ubicacion: "calle 13"
  },
  {
    image: "https://dl1.cbsistatic.com/i/r/2018/08/09/b6ca69f8-f123-408c-9b1f-ea3f9cf1fb17/resize/620xauto/8787947d1d00135d3f2ed512e56bee72/concert-crowd.jpg",
    title: "Pois",
    ubicacion: "calle 13"
  },
  {
    image: "https://cdn.thewirecutter.com/wp-content/uploads/2017/09/picnicsgrilling-2x1-fullres-top-1024x512.jpg",
    title: "Pois",
    ubicacion: "calle 13"
  },
];

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const SearchBar = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 4px 7px #EEEEEE;
  height: 25px;
  width: 300px;
`;

const Header = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  background-color: white;
  border-color: #EEEEEE;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  justify-content: center;
  align-items: center;
  width:100%;
  left:0;
  top:0;
  right: 0;
  z-index: 1000;
`;

const MainBodyContainer = styled.div`
  padding-horizontal: 20px;
  padding-top: 12px;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #EE993B;
  border-bottom-width: 4px;
  border-bottom-style: solid;
  width: 100%;
  height: 30px;
  padding-top: 15px;
`;

class Momentos extends PureComponent {

  state = {
    openOptions: false,
  }

  render () {
    return (
      <MainContainer>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openOptions}
          onClose={()=>this.setState({openOptions: false})}
          style={{display: 'flex', justifyContent: 'flex-end', paddingTop: 20}}
        >
          <ModalDescription/>
        </Modal>
        <Header>
          <SearchBar>
            <input
              placeholder="Buscar"
              type="text"
              name="search"
              style={{borderColor: 'transparent', width: '100%'}}
            />
          </SearchBar>
        </Header>
        <SubTitle>
          <p style={{fontSize: 14}}>Momentos</p>
        </SubTitle>
        <MainBodyContainer>
        <div style={{
          backgroundColor: 'white', 
          paddingLeft: 20, 
          paddingRight: 20, 
          marginBottom: 140,
          marginTop: 10
        }}>
       {
          data.map((item)=> {
            return (
              <div 
                onClick={()=>this.setState({openOptions: true})}
                style={{
                  height: 150,
                  marginTop: 10,
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'flex-end', 
                  marginBottom: 70,
                }}>
                <img style={{
                  height: 150, 
                  width: '100%', 
                  borderTopLeftRadius: 10, 
                  borderTopRightRadius: 10, 
                  objectFit: 'cover'
                  }} src={item.image}/>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderBottomLeftRadius: 10, 
                  borderBottomRightRadius: 10, 
                  backgroundColor: '#E4E4E4',
                  paddingLeft: 20,
                  paddingTop: 5
                  }}>
                  <p style={{fontWeight: 'bold'}}>{item.title}
                  <br/><span style={{color: 'black', fontWeight: 'normal'}}>{item.ubicacion}</span>
                  </p>
                </div>
              </div>
            )
          })
        }
        </div>
        </MainBodyContainer>
      </MainContainer>
    )
  }
}

export default Momentos;