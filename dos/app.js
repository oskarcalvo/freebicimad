var App = function(){
  var self = this;

  this.currentPosition = {};
  this.markers = {};

  var markerTemplate = function(location, message){
    return "<b> " + location.nombre + "</b><br/>Total de bicicletas " + location.numero_bases +  "<br/>Libres " + location.libres +  "<br/>Street " + location.direccion + "<br/>" + message + "<br>";
  }

  this.geolocate = function(){
    self.currentPosition = L.latLng(40.45, -3.70);
    var error = function(){
      self.currentPosition = L.latLng(40.45, -3.70);
    };

    var success = function(position){
      self.currentPosition = L.latLng(position.latitude, position.longitude);
      $('#Lat').html(position.latitude);
      $('#Long').html(position.longitude);
    };

    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  this.fetchAllLocations = function(){
    $.getJSON("http://bicimad-api.herokuapp.com/api-v1/locations", function(response){
      if(response.error === undefined) {
        var markersCluster = new L.MarkerClusterGroup();

        $.each( response.locations, function(key, val){
          var marker = new L.Marker([val.latitud, val.longitud]);
          self.markers[val.idestacion] = marker;

          marker.bindPopup( markerTemplate(val, '') );
          markersCluster.addLayer(marker);
        });

        self.map.addLayer(markersCluster);

      }
    });
  }


};

App.prototype.init = function(){

  this.geolocate();
  this.map = L.map('map', {center: this.currentPosition, zoom: 13, maxZoom: 18});
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18}).addTo(this.map);
  this.fetchAllLocations();

};
