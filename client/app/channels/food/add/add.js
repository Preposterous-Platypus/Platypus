angular.module('platypus.food-add', ['platypus.services'])
 .controller('FoodAddController', function($scope, YelpApi, Restaurants, Likes){

  $scope.data = {};

  $scope.restaurant = {};
  $scope.like = {}
  //created a YelpApi factory to use here
  	YelpApi.retrieveYelp()
  	.then(function(restaurants){
  		$scope.data.restaurants = restaurants;

  	}).catch(function(error){
  		console.error(error);
  	});

    //add a restaurant
    Restaurants.addOne($scope.restaurant);

    //add a like
    Likes.addOne($scope.like);

    //remove a like
    Likes.removeOne($scope.like);
 });
