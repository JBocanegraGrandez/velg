import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManagerLittle from '../../util/marker_manager_little';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});


class BusinessMapLittle extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: {
        lat: this.props.business.business.lat,
        lng: this.props.business.business.lng
      }, // San Francisco coords
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManagerLittle = new MarkerManagerLittle(this.map);
    this.MarkerManagerLittle.createMarkerFromBusiness(Object.values(this.props.business.business));
  }

  componentDidUpdate() {

    const mapOptions = {
      center: {
        lat: this.props.business.business.lat,
        lng: this.props.business.business.lng
      }, // San Francisco coords
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManagerLittle = new MarkerManagerLittle(this.map);
    this.MarkerManagerLittle.createMarkerFromBusiness(Object.values(this.props.business.business));

  }

  render() {
    return (
      <div className="map-little" ref={map => this.mapNode = map }> </div>
    )
  }
}

export default withRouter(BusinessMapLittle);
