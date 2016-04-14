angular.module('platypus.food-add', ['platypus.services'])
 .controller('FoodAddController', function($scope, Restaurants){

  $scope.data = {};

  $scope.restaurant = {};
  //we probably want to create a new restaurant service that fetches data from the yelp api, to use here
  	Restaurants.getAll()
  	.then(function(restaurants){
  		$scope.data.restaurants = restaurants;

  	}).catch(function(error){
  		console.error(error);
  	});

    //add a restaurant
    Restaurants.addOne($scope.restaurant);
 });
