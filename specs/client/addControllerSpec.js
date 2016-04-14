'use strict';

describe('FoodAddController', function () {
  var $scope, $rootScope, createController, Restaurants, $httpBackend;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('shortly'));
  beforeEach(inject(function ($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
    Restaurants = $injector.get('Restaurants');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    createController = function () {
      return $controller('FoodAddController', {
        $scope: $scope,
        Restaurants: Restaurants
      });
    };

  }));

  it('should have a data property on the $scope', function () {
    createController();
    expect($scope.data).to.be.an('object');
  });
//we probably want to create a new restaurant service that fetches data from the yelp api, to use here
  it('should call `Restaurants.getAll()` when controller is loaded', function () {
    sinon.spy(Restaurants, 'getAll');
    $httpBackend.expectGET('/add').respond(200);

    createController();
    $httpBackend.flush();

    expect(Restaurants.getAll.called).to.equal(true);
    Restaurants.getAll.restore();
  });
  
//we probably want to create a new restaurant service that fetches data from the yelp api, to use here
  it('should populate the data property after the call to `Restaurants.getAll()`', function () {
    var mockRestaurants = [{}, {}, {}];
    $httpBackend.expectGET('/add').respond(mockRestaurants);

    createController();
    $httpBackend.flush();

    expect($scope.data.restaurants).to.deep.equal(mockRestaurants);
  });
});
