angular.module('preposterous-platypus', [
  'ngRoute',
  'platypus.auth',
  'platypus.services'
  ])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/add', {
      templateUrl: 'app/add/add.html',
      controller: 'AddController'
    })
    .when('/feed', {
      templateUrl: 'app/feed/feed.html',
      controller: 'FeedController'
    })
    .when('/user/dashboard', {
      templateUrl: 'app/user/dashboard.html',
      controller: 'UserController'
    })
    .when('/user/settings', {
      templateUrl: 'app/user/settings.html',
      controller: 'UserController'
    })
    .otherwise({
      redirectTo: 'app/auth/signin.html'
    });
});