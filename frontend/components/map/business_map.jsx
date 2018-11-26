import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

// import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});


class BusinessMap extends React.Component {

  componentDidMount() {

    const mapOptions = {
      center: {
        lat: 37.773972,
        lng: -122.431297
      }, // San Francisco coords
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      <div className="map" ref={map => this.mapNode = map }> </div>
    )
  }
}

export default withRouter(BusinessMap);
