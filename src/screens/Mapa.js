import React,{ PureComponent } from 'react';
import { Map, GoogleApiWrapper, Polygon } from 'google-maps-react';
import { GoogleMap, Marker } from "react-google-maps"

const triangleCoords = [
  {lat: 25.774, lng: -80.190},
  {lat: 18.466, lng: -66.118},
  {lat: 32.321, lng: -64.757},
  {lat: 25.774, lng: -80.190}
];

class Mapa extends PureComponent {

  render(){
    return(
      <Map
        google={this.props.google}
        zoom={14}
        style={{
          width: '100%',
          height: window.screen.availHeight - 50
        }}
        initialCenter={{
          lat: 18.472341,
          lng: -69.886600
        }}
      >
        <Polygon
          paths={triangleCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.35} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCNUVMEuum1nbB3aDSVzC3eDb9LrWuI9_g'
})(Mapa);