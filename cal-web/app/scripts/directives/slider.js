'use strict';

/**
 * @ngdoc directive
 * @name calWebApp.directive:slider
 * @description
 * # slider
 */
angular.module('calWebApp')
  .directive('slider', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        element.flexslider({
	        slideshowSpeed: 5000,
	        directionNav: false,
	        animation: "fade"
	    });
      }
    };
  });
