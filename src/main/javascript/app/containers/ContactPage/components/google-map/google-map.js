import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './styles/style.css';

 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.022444,
      lng: 40.525111
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMapReact 
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
       />

      </div>
    );
  }
}
 
export default SimpleMap;