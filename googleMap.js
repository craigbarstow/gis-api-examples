$(document).ready(function(){
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(42.351701, -71.061435)
  };
  var map = new google.maps.Map(document.getElementById('google-map-canvas'),
      mapOptions);
});
