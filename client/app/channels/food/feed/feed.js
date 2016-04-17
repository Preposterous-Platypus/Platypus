angular.module('platypus.food-feed', ['platypus.services'])
.controller('FoodFeedController', function($scope, Restaurants) {
  
  $scope.data = {};

  //get all restaurants from database
  Restaurants.getAll()
  .then(function(restaurants) {
    $scope.data.restaurants = restaurants;
    console.log("retrievingAll: frontend controller");
    console.log(restaurants);
  })
  .catch(function(error) {
    console.error(error);
  });

  $scope.feedOrder = '-likes';
});