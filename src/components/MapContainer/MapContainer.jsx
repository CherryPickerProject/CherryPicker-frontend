import React, { Component } from 'react';
// import { GoogleApiWrapper, Map } from 'google-maps-react';
// import { Map } from '../../components/MapContainer/Map';
import GoogleMapReact from 'google-map-react';

export class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    const style = {
      width: '100%',
      height: '100vh'
    };
    return (
      <div style={style}>
        {/* <Map google={this.props.google} /> */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBNbze2NKiMCDYO9L9B9UvzaHSb2i1ynw0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBNbze2NKiMCDYO9L9B9UvzaHSb2i1ynw0'
// })(MapContainer);
