'use strict';

angular.module('talkangularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'talkangular'
])
  .config(['$routeProvider', function ($routeProvider) {
    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/main.html',
    //     controller: 'MainCtrl'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
  }]);
