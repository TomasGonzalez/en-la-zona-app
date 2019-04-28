import React, { PureComponent } from 'react';
import styled from 'styled-components';
import MdArrowForward from 'react-ionicons/lib/MdArrowForward';

const TitleBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 40px;
  padding-top: 10px;
  margin-top: 15px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 5px #EEEEEE;

`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #F2F9FE;
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
  padding-bottom: 10px;
  overflow: hidden;
`;

const image = 'https://zone-trt-bhxtb9xxzrrdpzhqr.netdna-ssl.com/wp-content/uploads/2017/06/sugar-club-bangkok-860x572.jpg';

class InterestDescription extends PureComponent {

  state = {
    seeMore: false,
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.value){
      window.scrollTo(0, 0);
    }
  }

  render () {
    if(!this.props.modalInfo){
      return(
        <div style={{backgroundColor: 'white', height: '100%'}}>Loading</div>
      )
    }
    return (
      <MainContainer>
        <TitleBar>
          <p style={{
            width: '100%',
            textAlign: 'center',
            borderLeftColor: '#EE993B', 
            borderLeftWidth: 2, 
            borderLeftStyle: 'solid',
            borderRightColor: '#EE993B', 
            borderRightWidth: 2, 
            borderRightStyle: 'solid'
            }}>{this.props.modalInfo.nombre}</p>
        </TitleBar>
        <img style={{height: 150, width: '100%', marginTop: 20}} src={this.props.modalInfo.foto}/>
        <div onClick={()=>this.setState({seeMore: !this.state.seeMore})} style={{
          display: 'flex',
          flexDirection: 'column',
          height: 40, 
          backgroundColor: "#EFD1A5", 
          alignItems: 'center', 
          justifyContent: 'center',
          paddingTop: 15,
        }}>
          <p style={{color: '#4797F4'}} fontSize="60px"> {!this.state.seeMore ? "Ver informacion" : "Mostrar menos"} </p>
        </div>
        { this.state.seeMore &&
          <div style={{backgroundColor: 'white', height: 50, padding: 10}}>
            <p style={{fontSize: 10}}>
              "{this.props.modalInfo.descripcionCorta}"
            </p>
          </div>
        }
        <div 
        onClick={()=>window.open(`https://maps.google.com/maps?daddr=${this.props.modalInfo.latitud},${this.props.modalInfo.longitud}&amp;ll=`)} 
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white', 
          alignItems: 'center',
          marginTop: 20, 
          paddingLeft: 10,
          paddingRight: 10
        }}>
          <div> 
            Como llegar aqui: {<br/>} {this.props.modalInfo.direccionCalle1} {<br/>}
          </div>
          <div style={{ 
            display: 'flex',
            backgroundColor: '#4797F4',
            height: 30,
            width: 30,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <MdArrowForward fontSize={15} color='white'/>
          </div>
        </div>
        {/* <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white', 
          alignItems: 'center',
          marginTop: 20, 
          padding: 10,
          }}>
          <div style={{flex: 1}}>
            <div>
              <p>Reseña</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <div style={{height: 30, width: 30, borderRadius: 30, backgroundColor: '#C3DFFA'}}/>
              <div style={{marginLeft: 10, height: 30, width: 30, borderRadius: 30, backgroundColor: '#C3DFFA'}}/>
              <div style={{marginLeft: 10, height: 30, width: 30, borderRadius: 30, backgroundColor: '#C3DFFA'}}/>
            </div>
          </div>
          <div>
            <p style={{fontSize: 9}}>1200 reviews</p>
            <div style={{ 
              display: 'flex',
              backgroundColor: '#4797F4',
              height: 30,
              paddingTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
              color: 'white'
            }}>
              <p style={{paddingLeft: 10, paddingRight: 10}}>ver mas</p>
            </div>
          </div>
        </div> */}
      </MainContainer>
    )
  }
}

export default InterestDescription