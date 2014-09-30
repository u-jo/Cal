'use strict';

/**
 * @ngdoc function
 * @name calWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calWebApp
 */
angular.module('calWebApp')
  .controller('MainCtrl', function ($scope, $modal, $log) {
    $scope.loginSignUp = function(signUp) {
        $scope.user = {}; 
        var logInBool = false;
        var signUpBool = false;
        if (signUp === 'login') {
            logInBool = true;
        } else {
            signUpBool = true;
        }
        $modal.open({
            templateUrl: '../../views/loginPopup.html',
            controller: 'LoginCtrl',
            size: 'm',
            windowClass: 'login-dialog',
            resolve: {
                logIn : function() {
                    return logInBool;
                },
                signUp: function() {
                    return signUpBool;
                },
                log: function() {
                    return $log;
                }
            }
        });

    };
  });
