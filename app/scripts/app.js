'use strict';

/**
 * @ngdoc overview
 * @name ktnAppApp
 * @description
 * # ktnAppApp
 *
 * Main module of the application.
 */
var app = angular
  .module('ktnAppApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'ui.bootstrap',
    'angularSpinner'
  ])
  .config(function ($routeProvider, localStorageServiceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/addquestion', {
        templateUrl: 'views/addquestion.html',
        controller: 'AddquestionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    localStorageServiceProvider
      .setPrefix('KtnGame');
  });
