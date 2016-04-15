angular.module('platypus.food-add', ['platypus.services'])
 .controller('FoodAddController', function($scope, YelpApi, Restaurants, Likes){

  $scope.data = {};

  $scope.like = {};

  $scope.search = function(){
                $scope.data.restaurants = {};
        YelpApi.retrieveYelp($scope.name, function(restaurants){
          $scope.data.restaurants = restaurants;
          console.log(restaurants);
          console.log($scope.data.restaurants.businesses);
          $scope.name = '';
        });
  };

  $scope.addOne = function(restaurant){

        //add a restaurant
    Restaurants.addOne(restaurant);
    console.log("adding ", restaurant);
    //add a like
    // Likes.addOne($scope.like);
  }

 });
