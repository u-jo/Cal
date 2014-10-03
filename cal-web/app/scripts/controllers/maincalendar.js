'use strict';

/**
 * @ngdoc function
 * @name calWebApp.controller:MaincalendarCtrl
 * @description
 * # MaincalendarCtrl
 * Controller of the calWebApp
 */
angular.module('calWebApp')
  .controller('MainCalendarCtrl', function ($scope, $state, $log, loginService) {
  	$scope.$on('$viewContentLoaded', function() {
  		$log.log('MainCalendarCtrl loaded');
  	});
  	$scope.tabs = [
  		{ heading: 'Schedule', route: 'calendar.schedule', active: true},
  		{ heading: 'Tasklist', route: 'calendar.tasklist', active: false},
  		{ heading: 'Wall', route: 'calendar.wall', active: false},
  		{ heading: 'Notes', route: 'calendar.notes', active: false}
  	];
  	$scope.activeTab = function() {
  		return $state.current.name;
  	}

    $scope.signout = function() {
      loginService.logout().then(function() {
        $state.go('home');
      });
      
    };

  	

  });
