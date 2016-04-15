angular.module('platypus.food-add', ['platypus.services'])
 .controller('FoodAddController', function($scope, YelpApi, Restaurants, Likes){

  $scope.data = {};

  $scope.restaurant = {};
  $scope.like = {};
  // created a YelpApi factory to use here
  // $scope.printSomething  = function(){
  //   console.log($scope.name);
  // };
    $scope.search = function(){
        YelpApi.retrieveYelp($scope.name, function(restaurants){
          $scope.data.restaurants = restaurants;
          console.log(restaurants);
          console.log($scope.data.restaurants.businesses);
          $scope.name = '';
        });

  };
  	// YelpApi.retrieveYelp($scope.name, function(restaurants){
  	// 	$scope.data.restaurants = restaurants;
   //    console.log($scope.data.restaurants.businesses);

  	// });

    //add a restaurant
    Restaurants.addOne($scope.restaurant);

    //add a like
    Likes.addOne($scope.like);

    //remove a like
    Likes.removeOne($scope.like);
 });
