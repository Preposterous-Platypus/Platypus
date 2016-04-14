angular.module('platypus.services', [])

//referenced: https://www.snip2code.com/Snippet/372987/Yelp-API-Headers-w--Angular
.factory('YelpApi', ['$http',
      function ($http) {
//not sure about how to store secret variables in config, didn't Arun already set that up? now there is a cute message from Reid...
        var randomString = function (length, chars) {
          var result = '';
          for (var i = length; i > 0; --i) {
            result += chars[Math.round(Math.random() * (chars.length - 1))];
          }
          return result;
        };

        var retrieveYelp = function (name, callback) {
          var method =  'GET';
          var url =     'http://api.yelp.com/v2/search';
          var params = {
            callback:                 'angular.callbacks._0',
            location:                 '30030',
            oauth_consumer_key:       '', // consumer key
            oauth_token:              '', //Token
            oauth_signature_method:   'HMAC-SHA1',
            oauth_timestamp:          new Date().getTime(),
            oauth_nonce:              randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
            term:                     'food'
          }; // end params
          var consumerSecret =        ''; //Consumer Secret
          var tokenSecret =           ''; //Token Secret
          var signature = 
            oauthSignature.generate(
              method, 
              url, 
              params, 
              consumerSecret, 
              tokenSecret, 
              { encodeSignature: false }
            ); 
            // end signature
          params['oauth_signature'] = signature;
          $http.jsonp(url, { params : params })
            .success(callback);
        }; // end retrieveYelp

        return {
          retrieveYelp: retrieveYelp      
        };

      } // end function

    ]) // end factory

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

  var removeOne = function(data) {
    return $http({
      method: 'DELETE',
      url: '/api/restaurants',    
      data: data
    })
    .then(function(resp) {
      console.log('DELETE request was successful!');
      return resp;
    });
  };

  var updateLikes = function(data) {
    return $http({
      method: 'PUT',
      url: '/api/restaurants',    
      data: data
    })
    .then(function(resp) {
      console.log('PUT request was successful!');
      return resp;
    });
  };

  return {
    getAll: getAll,
    addOne: addOne,
    removeOne: removeOne,
    updateLikes: updateLikes
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