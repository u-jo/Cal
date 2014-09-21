'use strict';

/**
 * @ngdoc function
 * @name calWebApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the calWebApp
 */
angular.module('calWebApp')
  .controller('ScheduleCtrl', function ($scope, $log) {
    $scope.$on('$viewContentLoaded', function() {
    	$log.log('ScheduleCtrl loaded');
    });
  });
