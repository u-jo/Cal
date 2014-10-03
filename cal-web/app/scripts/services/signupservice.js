'use strict';

/**
 * @ngdoc service
 * @name calWebApp.signupService
 * @description
 * # signupService
 * Factory in the calWebApp.
 */
angular.module('calWebApp')
  .factory('signupService', function ($resource, $http, loginService) {
    // Service logic
    // ...

    var signupResource = $resource('api/users.json');

    var signupService = {};

    signupService.signup = function(userInfo) {
      return signupResource.save({user: userInfo}).$promise.then(function(response) {
        var user = response['user'];
        var email = user.email;
        var auth_token = user.auth_token;
        $http.defaults.headers.common['X-API-TOKEN'] = auth_token;
        $http.defaults.headers.common['X-API-EMAIL'] = email;
        loginService.setLoginStatus(true);
        return response;
      }, function(response) {
      });
    };
    return signupService;
  });
