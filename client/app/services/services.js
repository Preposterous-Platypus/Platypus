angular.module('platypus.services', [])

.factory('Auth', function ($http, $location, $window) {
  //from Shortly Angular Sprint - change as needed
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.platypus');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.platypus');
    $location.path('/signin');
  };

  return {
    signin: signin,
    isAuth: isAuth,
    signout: signout
  };
});
