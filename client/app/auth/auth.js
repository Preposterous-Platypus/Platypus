angular.module('platypus.auth', [])
.controller('AuthController', function($scope){
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.platypus', token);
        $location.path('/signin');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.platypus', token);
        $location.path('/signup');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});