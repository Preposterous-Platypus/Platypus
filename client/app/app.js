angular.module('preposterous-platypus', [
  'ngRoute',
  'platypus-auth'
  ])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
});