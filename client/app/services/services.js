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

  var addOne = function(name, yelpID, distance, image_url, likes) {
    return $http({
      method: 'POST',
      url: '/api/restaurants',    
      data: {
        url: name,
        yelpID: yelpID,
        distance: distance,
        image_url: image_url,
        likes: likes
      }
    })
    .then(function(resp) {
      console.log('POST request was successful!');
      return resp;
    });
  };
  return {
    getAll: getAll,
    addOne: addOne,
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

  var createOne = function(type, gitHub, email, image) {
    return $http({
      method: 'POST',
      url: '/api/users',    
      data: {
        type: type,
        gitHub: gitHub,
        email: email,
        image: image
      }
    })
    .then(function(resp) {
      console.log('POST request was successful!');
      return resp;
    });
  };
  return {
    getAll: getAll,
    createOne: createOne,
  };
});