angular.module('platypus', [
  'ngRoute',
  'platypus.auth',
  'platypus.user',
  'platypus.services',
  'platypus.food-feed',
  'platypus.foodServices'
  ])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/food/add', {
      templateUrl: 'app/channels/food/add/add.html',
      controller: 'AddController'
    })
    .when('/food/feed', {
      templateUrl: 'app/channels/food/feed/feed.html',
      controller: 'FoodFeedController'
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
      redirectTo: '/user/dashboard'
    });
});