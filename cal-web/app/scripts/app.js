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
	'ngResource',
	'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
//
// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise('/');
	//
	// Now set up the states
	$stateProvider
		.state('calendar', {
			abstract: true,
			url: '/calendar',
			templateUrl: '/views/calendar/mainCalendar.html',
			controller: 'MainCalendarCtrl'
		})
		.state('calendar.schedule', {
			url: '/schedule',
			templateUrl: '/views/calendar/schedule.html',
			controller: 'ScheduleCtrl'
		})
		.state('calendar.notes', {
			url: '/notes',
			templateUrl: '/views/calendar/notes.html',
		})
		.state('calendar.wall', {
			url: '/wall',
			templateUrl: '/views/calendar/wall.html'
		}).
		state('calendar.tasklist', {
			url: '/tasklist',
			templateUrl: '/views/calendar/tasklist.html'
		});
})
.run(function ($resource) {
	// var csrfVerify = $resource('/api/csrf-verify.json');
	// csrfVerify.get();
});
