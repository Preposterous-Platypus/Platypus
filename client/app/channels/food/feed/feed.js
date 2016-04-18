angular.module('platypus.food-feed', ['platypus.services'])
.controller('FoodFeedController', function($scope, Restaurants, Likes) {
  
  $scope.data = {};

  $scope.data.likes = {};

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
});