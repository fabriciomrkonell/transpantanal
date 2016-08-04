'use strict';

angular.module('appTranspantanal', ['ngRoute']);

angular.module('appTranspantanal').config(function($routeProvider, $locationProvider){

   $routeProvider.when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl',
   }).when('/sobre', {
      templateUrl: 'views/sobre.html',
      controller: 'SobreCtrl',
   }).when('/contato', {
      templateUrl: 'views/contato.html',
      controller: 'ContatoCtrl',
   }).otherwise ({ redirectTo: '/' });
});

angular.module('appTranspantanal').controller('HomeCtrl', function($rootScope, $location){

});

angular.module('appTranspantanal').controller('SobreCtrl', function($rootScope, $location){

});

angular.module('appTranspantanal').controller('ContatoCtrl', function($rootScope, $location){

});