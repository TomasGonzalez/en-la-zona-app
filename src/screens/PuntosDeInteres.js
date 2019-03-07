import React,{Component} from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FCFCFD;

`;

const data = [
  {
    image: "https://cdn.vox-cdn.com/thumbor/ourd2JzaI8FvVUAeHyMeZmOVUPQ=/0x0:2000x1335/2070x1164/filters:focal(840x508:1160x828):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61623387/2018_09_28_GoldLineBar_003.0.jpg",
    title: "Pois",
    ubicacion: "calle 13"
  },
  {
    image: "https://cdn.vox-cdn.com/thumbor/ourd2JzaI8FvVUAeHyMeZmOVUPQ=/0x0:2000x1335/2070x1164/filters:focal(840x508:1160x828):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61623387/2018_09_28_GoldLineBar_003.0.jpg",
    title: "Pois",
    ubicacion: "calle 13"
  },
  {
    image: "https://cdn.vox-cdn.com/thumbor/ourd2JzaI8FvVUAeHyMeZmOVUPQ=/0x0:2000x1335/2070x1164/filters:focal(840x508:1160x828):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61623387/2018_09_28_GoldLineBar_003.0.jpg",
    title: "Pois",
    ubicacion: "calle 13"
  },
  {
    image: "https://cdn.vox-cdn.com/thumbor/ourd2JzaI8FvVUAeHyMeZmOVUPQ=/0x0:2000x1335/2070x1164/filters:focal(840x508:1160x828):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61623387/2018_09_28_GoldLineBar_003.0.jpg",
    title: "Pois",
    ubicacion: "calle 13"
  },
  {
    image: "https://cdn.vox-cdn.com/thumbor/ourd2JzaI8FvVUAeHyMeZmOVUPQ=/0x0:2000x1335/2070x1164/filters:focal(840x508:1160x828):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61623387/2018_09_28_GoldLineBar_003.0.jpg",
    title: "Pois",
    ubicacion: "calle 13"
  },
  {
    image: "https://cdn.vox-cdn.com/thumbor/ourd2JzaI8FvVUAeHyMeZmOVUPQ=/0x0:2000x1335/2070x1164/filters:focal(840x508:1160x828):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61623387/2018_09_28_GoldLineBar_003.0.jpg",
    title: "Pois",
    ubicacion: "calle 13"
  },
];

export default class PuntosDeInteres extends Component {
  render () {
    return (
      <MainContainer>
        <div style={{display: 'flex', width: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
          <p>Puntos de interes</p>
        </div>
        <div style={{backgroundColor: 'white', paddingLeft: 20, paddingRight: 20}}>
        {
          data.map((item)=>{
            return (
              <div style={{height: 150, width: 300,backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: 20}}>
                <img style={{height: 150, width: 300, borderRadius: 10, position: "absolute"}} src={item.image} alt="Italian Trulli"/>
                <p style={{fontSize: 40, color: 'white', position: 'absolute'}}>{item.title}</p>
              </div>
            )
          })
        }
        <div style={{borderColor: 'black', borderWidth: 1, backgroundColor: 'white', height: 60, width: 300, borderRadius: 10}}>

        </div>
        </div>
      </MainContainer>
    )
  }
}