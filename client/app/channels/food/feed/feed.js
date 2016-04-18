angular.module('platypus.food-feed', ['platypus.services'])
.controller('FoodFeedController', function($scope, Restaurants, Likes) {
  
  $scope.data = {};

  // $scope.likes = {};

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

  //update Likes
  Likes.addOrRemove()
  .then(function(liked) {
    console.log(liked);
    Restaurant.updateLikes()
    .then(function(likes) {
      console.log(likes);
    });
  })
  .catch(function(error) {
    console.log(error);
  });
});