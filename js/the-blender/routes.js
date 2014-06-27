/**
 * Each services for the Blender application
 */
angular.module('blenderRoute', ['blenderController', 'ngRoute'])

// Routing
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'view/home.html', controller: 'homeController'})
		.when('/doc/:language/:template', { templateUrl: 'view/doc.html', controller:'docController'})
		.when('/about', { templateUrl: 'view/about.html', controller: 'aboutController'})
		.when('/community', { templateUrl: 'view/community.html', controller: 'communityController'})
		.otherwise({ redirectTo: '/' });
}]);
