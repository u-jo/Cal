'use strict';

/**
 * @ngdoc directive
 * @name calWebApp.directive:feature
 * @description
 * # feature
 */
angular.module('calWebApp')
  .directive('feature', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
      	var iconColor = element.find('.feature-icon').css('color');
      	element.hover(function() {
      		var icon = element.find('.feature-icon');
      		icon.css('color', '#FF6961');
      		icon.css('transition', '0.5s all ease');
      	},function() {
      		var icon = element.find('.feature-icon');
      		icon.css('color', iconColor);
      		icon.css('transition', '0.5s all ease');
      	});
      }
    };
  });
