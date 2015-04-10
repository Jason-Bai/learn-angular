var countryApp = angular.module('countryApp', ['ngRoute', 'countryControllers']);

countryApp.config(function($routeProvider) {
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

countryApp.factory('countries', function($http){
  return {
    list: function (callback){
      $http({
        method: 'GET',
        url: 'http://localhost:3000/countries5.json',
        cache: true
      }).success(callback);
    },
    find: function(id, callback){
      $http({
        method: 'GET',
        url: 'http://localhost:3000/countries5_' + id + '.json',
        cache: true
      }).success(callback);
    }
  };
});

countryApp.directive('country', function(){
  return {
    scope: {
      country: '='
    },
    restrict: 'A',
    templateUrl: 'country49.html',
    controller: function($scope, countries){
      countries.find($scope.country.id, function(country) {
        $scope.flagURL = country.flagURL;
      });
    }
  };
});