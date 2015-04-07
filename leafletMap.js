$(document).ready(function() {
  //a great list of base maps for leaflet is available at 
  //http://leaflet-extras.github.io/leaflet-providers/preview/

  var esriWorldTopo = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    {
     attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
  });

  var mapQuestAerial = L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}',
  {
  	type: 'sat',
  	ext: 'jpg',
  	attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
  	subdomains: '1234'
  });

  //set map default view to entire USA
  var map = L.map('leaflet-map-canvas', {
    center: [42.351701, -71.061435],
    zoom: 4
  });

  L.control.layers({
      'Topo Map': esriWorldTopo.addTo(map),
      'Satellite': mapQuestAerial
  }).addTo(map);
});
