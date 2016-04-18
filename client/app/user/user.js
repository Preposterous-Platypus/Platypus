angular.module('platypus.user', [])

.controller('UserController', function($scope, Likes, Restaurants){
  //update Likes
  $scope.updateLikes = function(restID) {
    Likes.addOrRemove(restID)
    .then(function(liked) {
      Restaurants.updateLikes(restID)
      .then(function(likes) {
        $scope.populate();
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  $scope.data = {};

  $scope.populate = function() {
    Likes.retrieveLikedRestaurants(function(restaurants) {
      $scope.data.restaurants = [];
      $scope.data.restaurants = restaurants;
      console.log('RESTAURANTS: ', restaurants);
    });
  };

  $scope.populate();

  $scope.feedOrder = '-likes';


});