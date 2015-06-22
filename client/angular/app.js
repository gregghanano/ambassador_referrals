var myApp = angular.module('myApp', ['ngRoute', 'LocalStorageModule']);

myApp.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/dashboard.html'
	})
	.when('/landing/', {
		templateUrl: 'partials/landing.html',
		reloadOnSearch: false
	})
	.when('/edit/:name', {
		templateUrl: 'partials/edit.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})