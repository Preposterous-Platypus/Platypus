angular.module('platypus.user', [])

.controller('UserController', function($scope, Likes){
  $scope.data = {};

  $scope.populate = function() {
    $scope.data.restaurants = {};

    Likes.retrieveLikedRestaurants(function(restaurants) {
      $scope.data.restaurants = restaurants;
      console.log('RESTAURANTS: ', restaurants);
    });
  };

  $scope.populate();

  $scope.feedOrder = '-likes';

  // filter out restaurants
  // $scope.filter = function() {
  //   $scope.data.restaurants = {};

  // };
});