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
	'ui.router',
	'ui.bootstrap'
])
.config(function($stateProvider, $urlRouterProvider) {
//
// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise('/');
	// Static pages
	$stateProvider.state('home', {
		url: '/',
		templateUrl: '/views/main.html',
		controller: 'MainCtrl'
	});
	// Now set up the states
	$stateProvider
		.state('calendar', {
			abstract: true,
			url: '/calendar',
			templateUrl: '/views/calendar/mainCalendar.html',
			controller: 'MainCalendarCtrl'
		})
		.state('calendar.schedule', {
			url: '/schedule/:id',
			templateUrl: '/views/calendar/schedule.html',
			controller: 'ScheduleCtrl'
		})
		.state('calendar.notes', {
			url: '/notes/:id',
			templateUrl: '/views/calendar/notes.html',
		})
		.state('calendar.wall', {
			url: '/wall/:id',
			templateUrl: '/views/calendar/wall.html'
		}).
		state('calendar.tasklist', {
			url: '/tasklist/:id',
			templateUrl: '/views/calendar/tasklist.html'
		});
})
.run(function ($rootScope, $resource, $state, $stateParams, authenticationService) {
	var csrfVerify = $resource('/api/csrf-verify.json');
	csrfVerify.get();

	$rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
        if (!toStateParams.id) {
        	$state.go('home');
        }
        // if (toState == 'calendar.schedule' || toState == 'calendar.notes' || toState == 'calendar.wall' || toState == 'calendar.tasklist') {
        // 	authenticationService.isAuthenticated(toStateParams.id).then(function(response) {
        // 		if (!response.success) {
        // 			$state.go('home');
        // 		}
        // 	});
        // }
    });
});
