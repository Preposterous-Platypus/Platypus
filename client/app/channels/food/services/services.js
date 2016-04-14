angular.module('platypus.services', [])

.factory('Restaurants', function ($http) {
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/restaurants',
    })
    .then(function(resp) {
      console.log('GET request was successful!');
      return resp.data;
    });
  };

  var addOne = function(data) {
    return $http({
      method: 'POST',
      url: '/api/restaurants',    
      data: data
    })
    .then(function(resp) {
      console.log('POST request was successful!');
      return resp;
    });
  };
  return {
    getAll: getAll,
    addOne: addOne
  };
})

.factory('Users', function ($http) {
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/users',
    })
    .then(function(resp) {
      console.log('GET request was successful!');
      return resp.data;
    });
  };

  var createOne = function(data) {
    return $http({
      method: 'POST',
      url: '/api/users',    
      data: data
    })
    .then(function(resp) {
      console.log('POST request was successful!');
      return resp;
    });
  };
  return {
    getAll: getAll,
    createOne: createOne
  };
})

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
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
})

.factory('Likes', function ($http) {
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/likes',
    })
    .then(function(resp) {
      console.log('GET request was successful!');
      return resp.data;
    });
  };

//join create may need to be reimplemented
  var addOne = function(data) {
    return $http({
      method: 'POST',
      url: '/api/likes',    
      data: data
    })
    .then(function(resp) {
      console.log('POST request was successful!');
      return resp;
    });
  };

  var removeOne = function(data) {
    return $http({
      method: 'DELETE',
      url: '/api/likes',    
      data: data
    })
    .then(function(resp) {
      console.log('POST request was successful!');
      return resp;
    });
  };
  return {
    getAll: getAll,
    addOne: addOne,
    removeOne: removeOne
  };
});