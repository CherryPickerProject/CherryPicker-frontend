import React from 'react'
import { GoogleApiWrapper } from 'google-maps-react';
import { Map } from '../../components/MapContainer/Map';

const mapStyles = {
    width: '100%',
    height: '100%'
  };
  
export class MapContainer extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <Map google={this.props.google}
          />
      </div>
    )
  }
}
  
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBNbze2NKiMCDYO9L9B9UvzaHSb2i1ynw0'
})(MapContainer);