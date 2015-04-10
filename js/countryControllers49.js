var countryControllers = angular.module('countryControllers', []);

countryControllers.controller('CountryListCtrl', function ($scope, countries){
  countries.list(function(data) {
    $scope.countries = data;
  });
});

countryControllers.controller('CountryDetailCtrl', function ($scope, $routeParams, countries){
  countries.find($routeParams.countryId, function(country) {
    $scope.country = country;
  });
});
