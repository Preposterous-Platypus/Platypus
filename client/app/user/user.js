angular.module('platypus.user', [])

.controller('UserController', function($scope, Likes){
  $scope.data = {};

  $scope.populate = function() {
    $scope.data.restaurants = {};

    Likes.retrieveLikedRestaurants($scope.name, function(restaurants) {
      $scope.data.restaurants = restaurants;
      console.log(restaurants);
      $scope.name = '';
    });
  };

  $scope.populate();

  // filter out restaurants
  // $scope.filter = function() {
  //   $scope.data.restaurants = {};

  // };
});