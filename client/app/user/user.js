angular.module('platypus.user', [])

.controller('UserController', function($scope, Likes){
  $scope.data = {};

  $scope.populate = function() {

    Likes.retrieveLikedRestaurants(function(restaurants) {
      $scope.data.restaurants = restaurants;
      console.log('RESTAURANTS: ', restaurants);
    });
  };

  $scope.populate();

  $scope.feedOrder = '-likes';
});