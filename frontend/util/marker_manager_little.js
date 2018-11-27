export default class MarkerManagerLittle {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }



  createMarkerFromBusiness(business) {
    const position = new google.maps.LatLng(business[11], business[12]);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      businessId: business[7]
    });
    marker.addListener('click', () => this.handleClick(business));
    this.markers[marker.businessId] = marker;

  }

  removeMarker(marker) {
   this.markers[marker.businessId].setMap(null);
   delete this.markers[marker.businessId];
 }

}
