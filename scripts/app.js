var learnApp = angular.module('learnApp', [
  'ngRoute',
  'BasicCtrl',
  'leaflet-directive'  
]);
 


learnApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'partials/basic.html',
        controller: 'BasicCtrl'
      }).
      otherwise({
        redirectTo: 'basic.html',
      }); 
  }
]);


 /*
learnApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'partials/basic.html',
        controller: 'BasicCtrl'
      }).
      when('/cero', {
        templateUrl: 'partials/cero.html',
        controller: 'BasicCtrl'
      }).
      when('/addunit', {
        templateUrl: 'partials/AddUnit.html',
        controller: 'AddUnit'
      }).
      when('/addunitweapon', {
        templateUrl: 'partials/Weapons.html',
        controller: 'Weapons'
      }).      
      otherwise({
        redirectTo: 'cero',
      });

  }]);
*/
  