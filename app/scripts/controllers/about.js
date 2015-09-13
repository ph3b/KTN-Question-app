'use strict';

/**
 * @ngdoc function
 * @name ktnAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ktnAppApp
 */
angular.module('ktnAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
