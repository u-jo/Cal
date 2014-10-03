'use strict';

/**
 * @ngdoc factory
 * @name calWebApp.loginService
 * @description
 * # loginService
 * Service in the calWebApp.
 */
angular.module('calWebApp')
  .factory('loginService', function loginService($resource, $state, $http) {
  	var loginResource = $resource('/api/users/sign_in.json');
  	var logoutResource = $resource('/api/users/sign_out.json');
  	var loginService = {};
  	loginService.loggedIn = false;
  	loginService.login = function(userData) {
  		return loginResource.save({user: userData}).$promise.then(function(response) {
  			var user = response['user'];
        	var email = user.email;
        	var auth_token = user.auth_token;
       		$http.defaults.headers.common['X-API-TOKEN'] = auth_token;
        	$http.defaults.headers.common['X-API-EMAIL'] = email;
        	loginService.loggedIn = true;
        	return response;
  		});
  	};

  	loginService.setLoginStatus = function(status) {
  		loginService.loggedIn = status;
  	}

  	loginService.logout = function() {
  		return logoutResource.delete().$promise.then(function(response) {
  			$http.defaults.headers.common['X-API-TOKEN'] = '';
         	$http.defaults.headers.common['X-API-EMAIL'] = '';
  			loginService.loggedIn = false;
  		});
  		
  	}

  	return loginService;
  });
