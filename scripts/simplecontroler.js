var freebiciMad = angular.module('freebiciMad', ['leaflet-directive']);

freebiciMad.controller('freebiciMad',  function($scope, $http) {


  angular.extend($scope, {
    center: {
      autoDiscover: true,
      zoom: 13
    },
    markers: {

            Madrid: {
                lat: 40.095,
                lng: -3.823,
                message: "This is Madrid. But you can drag me to another position",
                focus: true,
                draggable: true
            },
            Barcelona: {
                lat: 41.38,
                lng: 2.18,
                message: "This is Barcelona. You can't drag me",
                focus: false,
                draggable: false
            }
        }
  });
  

  Estaciones.init();
  $(Estaciones).on("estaciones_ready", function(){
    Estaciones.getEstaciones().done(function(){
      console.log('hola mundo');
    })
  });


  $scope.Geo = Geo;
  Geo.init();
  $(Geo).on("geolocation_ready", function(){
    Geo.isMadrid().done(function(){
    })
  })
   
  
  // console.log(isMadrid);

});