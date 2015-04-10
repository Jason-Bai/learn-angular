var countryApp = angular.module('countryApp', [
	'ngRoute',
	'countryControllers',
	'countriesFactory',
	'countryDirective'
]);

countryApp.config(function ($routeProvider) {
	
	$routeProvider.
		when('/', {
			templateUrl: 'country-list49.html',
			controller: 'CountryListCtrl'
		}).
		when('/:countryId', {
			templateUrl: 'country-detail49.html',
			controller: 'CountryDetailCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	
});