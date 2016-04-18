angular.module('platypus.user', [])

.controller('UserController', function($scope, Likes, Restaurants){
  var updateUserLikes = function() {
    Likes.findUserLikes()
    .then(function(likes) {
      $scope.data.likes = {};
      for (var i = 0; i < likes.length; i++) {
        $scope.data.likes[likes[i].restaurant] = true;
      }
    });
  };

  updateUserLikes();

  //update Likes
  $scope.updateLikes = function(restID) {
    Likes.addOrRemove(restID)
    .then(function(liked) {
      Restaurants.updateLikes(restID)
      .then(function(likes) {
        var restaurants = $scope.data.restaurants;
        for (var i = 0; i < restaurants.length; i++) {
          if (restaurants[i]._id === restID) {
            restaurants[i].likes = likes;
          }
        }
        updateUserLikes();
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  };

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