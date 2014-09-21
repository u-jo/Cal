'use strict';

/**
 * @ngdoc directive
 * @name calWebApp.directive:calendar
 * @description
 * # calendar
 */
angular.module('calWebApp')
  .directive('calendar', function () {
    return {
      templateUrl: '/views/templates/calendar.html',
      restrict: 'A',
      link: function postLink(scope, element) {
      	var currentDate = new Date();
      	var calendarYear = currentDate.getFullYear();
      	var calendarMonth = currentDate.getMonth() + 1 < 10 ? 
      					'0' + (currentDate.getMonth() + 1) : '' + (currentDate.getMonth() + 1);
      	var calendarDay = currentDate.getDate() < 10 ? 
      					'0' + currentDate.getDate() : currentDate.getDate() + '';
      	var calendarElement = element.find('.responsive-calendar');
      	calendarElement.responsiveCalendar({
			time: calendarYear + '-' + calendarMonth
		});
		var currentDateString = calendarYear + '-' + calendarMonth + '-' + calendarDay;
		var eventObject = {};
		eventObject[currentDateString] = {"number": 1, "badgeClass": "badge-error"};
      	calendarElement.responsiveCalendar('edit', eventObject);
      }
    };
  });
