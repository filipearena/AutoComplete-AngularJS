var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl:'autocomplete/views/autocomplete.html',
          controller: 'AutoCompleteController',
          controllerAs: 'auto'
        });
  }]);
