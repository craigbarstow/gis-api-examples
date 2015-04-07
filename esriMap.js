$(document).ready(function(){
  require(["esri/map", "dojo/domReady!"], function(Map) {
  var map = new Map("esri-map-canvas", {
    center: [-71.061435, 42.351701],
    zoom: 8,
    basemap: "topo"
    });
  });
});
