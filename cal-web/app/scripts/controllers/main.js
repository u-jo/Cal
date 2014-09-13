'use strict';

/**
 * @ngdoc function
 * @name calWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calWebApp
 */
angular.module('calWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
