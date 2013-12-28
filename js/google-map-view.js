(function(window, document, undefined) {
  var GoogleMapView = {};
  
  // zoom level for Google Map
  var DEFAULT_ZOOM = 14;
  var STATUS_OK = 200;

  /* Renders a map for the given entry into the provided $map element. */
  GoogleMapView.render = function($map, entryData) {
    // TODO
    var mapImage= document.createElement('img');
    mapImage.src = 'http://maps.google.com/maps/api/staticmap?center=' +
                entryData + '&size=420x295&maptype=roadmap&sensor=false' +
                '&zoom=' + DEFAULT_ZOOM;
    $map.append(mapImage);

  };
  
  window.GoogleMapView = GoogleMapView;
})(this, this.document);
