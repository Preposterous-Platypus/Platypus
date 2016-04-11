angular.module('preposterous-platypus', [
  'ngRoute',
  'platypus-homepage'
  ])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/homepage/homepage.html',
      controller: 'HomepageController'
    })
});