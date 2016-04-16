angular.module('platypus.food-add', [])
 .controller('FoodAddController', function($scope, YelpApi, Restaurants, Likes){

  $scope.data = {};

  $scope.like = {};

  $scope.search = function(){
    $scope.data.restaurants = {};

    YelpApi.retrieveYelp($scope.name, function(restaurants){
      $scope.data.restaurants = restaurants;
      console.log(restaurants);
      $scope.name = '';
    });
  };

  $scope.addOne = function(restaurant){
    var restaurantCategories = [];

    for(var i = 0; i < restaurant.categories.length; i++) {
      restaurantCategories.push(restaurant.categories[i][0]);
    }

    console.log('Original categories are ', restaurant.categories);
    console.log('categories are ', restaurantCategories);

    Restaurants.addOne({
      name: restaurant.name,
      yelpID: restaurant.id,
      eat24_url: restaurant.eat24_url || null,
      image_url: restaurant.image_url,
      likes: 0,
      categories: restaurantCategories
    });
    //add a like
    // Likes.addOne($scope.like);
  }
 });
