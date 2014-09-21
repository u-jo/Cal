'use strict';

/**
 * @ngdoc directive
 * @name calWebApp.directive:notepad
 * @description
 * # notepad
 */
angular.module('calWebApp')
  .directive('notepad', function () {
    return {
      templateUrl: '/views/templates/notepad.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
      	element.height(element.parent().height());
      }
    };
  });
