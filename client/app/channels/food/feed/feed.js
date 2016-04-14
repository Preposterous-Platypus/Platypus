angular.module('platypus.food-feed', ['platypus.services'])
.controller('FoodFeedController', function($scope) {
  
  $scope.data = {};

  //get all restaurants from database
  Restaurant.getAll()
  .then(function(restaurants) {
    $scope.data.restaurants = restaurants;
  })
  .catch(function(error) {
    console.error(error);
  });
});