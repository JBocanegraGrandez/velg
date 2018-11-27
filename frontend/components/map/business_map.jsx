import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});


class BusinessMap extends React.Component {

  componentDidMount() {

    const mapOptions = {
      center: {
        lat: this.props.businesses[0].lat,
        lng: this.props.businesses[0].lng
      }, // San Francisco coords
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  componentDidUpdate() {

    const mapOptions = {
      center: {
        lat: this.props.businesses[0].lat,
        lng: this.props.businesses[0].lng
      }, // San Francisco coords
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses);

  }

  render() {
    return (
      <div className="map" ref={map => this.mapNode = map }> </div>
    )
  }
}

export default withRouter(BusinessMap);
