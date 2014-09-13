'use strict';

/**
 * @ngdoc overview
 * @name calWebApp
 * @description
 * # calWebApp
 *
 * Main module of the application.
 */
angular
  .module('calWebApp', [
    'ngCookies',
    'ngResource'
  ])
  .run(function ($resource) {
    var csrfVerify = $resource('/api/csrf-verify.json');
    csrfVerify.get();
  });
