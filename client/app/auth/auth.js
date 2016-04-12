angular.module('auth', [])
.controller('AuthController', function ($scope, $window, $location) {
  $scope.user = {};
  // $scope.signin = function () {
  // 	Auth.signin($scope.user)
  // 	  .then(function(token) {
  // 	  	//$window.localStorage.
  // 	  	//$location.path();
  // 	  })
  // 	  .catch(function(err) {
  // 	  	console.log(err);
  // 	  });
  // };
});