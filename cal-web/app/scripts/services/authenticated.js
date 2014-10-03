'use strict';

/**
 * @ngdoc service
 * @name calWebApp.authenticated
 * @description
 * # authenticated
 * Factory in the calWebApp.
 */
angular.module('calWebApp')
  .factory('authenticationService', function ($resource) {
    var authService = {};
    var authResource = $resource('/api/authenticated.json')
    authService.isAuthenticated = function(id) {
      authResource.get({id: id}).$promise.then(function(response) {
        return response;
      })
    };
    return authService;
  });
