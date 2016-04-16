'use strict';

describe('Routing', function () {
  var $route;
  beforeEach(module('platypus'));

  beforeEach(inject(function ($injector) {
    $route = $injector.get('$route');
  }));

  //signin
  it('Should have /signin route, template, and controller', function () {
    expect($route.routes['/signin']).to.be.defined;
    expect($route.routes['/signin'].controller).to.equal('AuthController');
    expect($route.routes['/signin'].templateUrl).to.equal('app/auth/signin.html');
  });

  it('Should have /add route, template, and controller', function () {
    expect($route.routes['/add']).to.be.defined;
    expect($route.routes['/add'].controller).to.equal('FoodAddController');
    expect($route.routes['/add'].templateUrl).to.equal('app/channels/food/add/add.html');
  });

  it('Should have /feed route, template, and controller', function () {
    expect($route.routes['/feed']).to.be.defined;
    expect($route.routes['/feed'].controller).to.equal('FoodFeedController');
    expect($route.routes['/feed'].templateUrl).to.equal('app/channels/food/feed/feed.html');
  });
});