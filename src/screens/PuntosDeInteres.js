import React,{Component} from 'react';
import styled from 'styled-components';
import { PageHeader } from 'antd';

const data = [
  {
    image: "https://cdn.vox-cdn.com/thumbor/ourd2JzaI8FvVUAeHyMeZmOVUPQ=/0x0:2000x1335/2070x1164/filters:focal(840x508:1160x828):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61623387/2018_09_28_GoldLineBar_003.0.jpg",
    title: "Pois",
    ubicacion: "calle 13"
  },
  {
    image: "https://www.maisondelaradio.fr/sites/default/files/styles/full_width_932/public/assets/images/photo1_0.jpg?itok=b4ea5-vu",
    title: "Pois",
    ubicacion: "calle 13"
  },
  {
    image: "https://cdn.vox-cdn.com/thumbor/ourd2JzaI8FvVUAeHyMeZmOVUPQ=/0x0:2000x1335/2070x1164/filters:focal(840x508:1160x828):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61623387/2018_09_28_GoldLineBar_003.0.jpg",
    title: "Pois",
    ubicacion: "calle 13"
  },
  {
    image: "https://www.maisondelaradio.fr/sites/default/files/styles/full_width_932/public/assets/images/photo1_0.jpg?itok=b4ea5-vu",
    title: "Pois",
    ubicacion: "calle 13"
  },
  {
    image: "https://cdn.vox-cdn.com/thumbor/ourd2JzaI8FvVUAeHyMeZmOVUPQ=/0x0:2000x1335/2070x1164/filters:focal(840x508:1160x828):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61623387/2018_09_28_GoldLineBar_003.0.jpg",
    title: "Pois",
    ubicacion: "calle 13"
  },
  {
    image: "https://www.maisondelaradio.fr/sites/default/files/styles/full_width_932/public/assets/images/photo1_0.jpg?itok=b4ea5-vu",
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
  box-shadow: 0px 4px 5px #EEEEEE;
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

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  height: 60px;
  width: 80%;
  border-radius: 15px;
  box-shadow: 0px 4px 5px #EEEEEE;

  position:fixed;
  bottom: 10px;
  z-index: 1000;
`;

export default class PuntosDeInteres extends Component {
  render () {
    return (
      <MainContainer>
        <Header>
          <SearchBar>
            <input 
              type="text" 
              name="search" 
              style={{borderColor: 'transparent', width: '100%'}}
            />
          </SearchBar>
        </Header>
        <SubTitle>
          <p style={{fontSize: 14}}>Puntos de interes</p>
        </SubTitle>
        <MainBodyContainer>
        <div style={{
          backgroundColor: 'white', 
          paddingLeft: 20, 
          paddingRight: 20, 
          marginBottom: 60,
          marginTop: 40
        }}>
        {
          data.map((item)=> {
            return (
              <div style={{
                height: 150,
                marginTop: 10,
                backgroundColor: 'white', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'flex-end', 
                paddingBottom: 20,
              }}>
                <img style={{height: 150, width: '100%', borderRadius: 10}} src={item.image}/>
                <div style={{position: 'absolute', alignSelf: "flex-start", marginLeft: 20}}>
                  <p style={{fontSize: 18, color: 'white' }}>{item.title}</p>
                  <p style={{fontSize: 12, color: 'gray'}}>{item.ubicacion}</p>
                </div>
              </div>
            )
          })
        }
        </div>
        </MainBodyContainer>
        <Footer>
          <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <p style={{fontSize: 10}}>50</p>
            <p style={{fontSize: 7}}>Eventos cercanos</p>
          </div>
          <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <p style={{fontSize: 10}}>250</p>
            <p style={{fontSize: 7}}>Negocios cercanos</p>
          </div>
          <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <p style={{fontSize: 10}}>40</p>
            <p style={{fontSize: 7}}>Momentos nuevos</p>
          </div>
        </Footer>
      </MainContainer>
    )
  }
}