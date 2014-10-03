'use strict';

/**
 * @ngdoc function
 * @name calWebApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the calWebApp
 */
angular.module('calWebApp')
  .controller('LoginCtrl', function ($scope, $modalInstance, $http, $state, log, logIn, signUp, signupService, loginService) {
    $scope.logIn = logIn;
  	$scope.signUp = signUp;
  	$scope.user = {};
  	$scope.close = function() {
  		$modalInstance.close();
  	};

  	
  	$scope.changePopupState = function() {
  		$scope.logIn = !$scope.logIn;
  		$scope.signUp = !$scope.signUp;
  	};
  	$scope.login = function() {
    	var userLogin = {
    		email: $scope.user.email,
    		password: $scope.user.password
    	};
    	// TODO Login
      loginService.login(userLogin).then(function(response) {
        $state.go('calendar.schedule', {id: response.user.id});
      });
    	$modalInstance.close();
    };


    $scope.signup = function() {
        var user = {
            email: $scope.user.signupEmail,
            password: $scope.user.signupPassword,
            password_confirmation: $scope.user.signupPassConfirm
        };
        signupService.signup(user).then(function(response) {
          $state.go('calendar.schedule', {id: response.user.id});
        });
        $modalInstance.close();
    };
});
