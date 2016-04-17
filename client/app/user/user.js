angular.module('platypus.user', [])
.controller('UserController', function($scope){
  $scope.data = {};

  $scope.filter = function() {
    $scope.data.restaurants = {};


  };

});