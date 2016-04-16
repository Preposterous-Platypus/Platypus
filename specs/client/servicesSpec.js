'use strict';

describe('Services', function () {
  beforeEach(module('platypus.services'));

  afterEach(inject(function ($httpBackend) {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));


  describe('Restaurants Factory', function () {
    var $httpBackend, Restaurants;

    beforeEach(inject(function (_$httpBackend_, _Restaurants_) {
      $httpBackend = _$httpBackend_;
      Restaurants = _Restaurants_;
    }));

    it('should exist', function () {
      expect(Restaurants).to.exist;
    });

    it('should have a method `getAll`', function () {
      expect(Restaurants.getAll).to.be.a('function');
    });

    it('should have a method `addOne`', function () {
      expect(Restaurants.addOne).to.be.a('function');
    });

    it('should get all Restaurants with `getAll`', function () {
      var mockResponse = [
        { name: 'Little Star Pizza',
          yelpID: 'little-star-pizza-san-francisco',
          url: 'http://www.littlestarpizza.com' ,
          image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/OdMRQ5SuXajPveg0sMaZGQ/ms.jpg' },
        { name: 'Long Bridge Pizza',
          yelpID: 'long-bridge-pizza-san-francisco',
          url: 'http://www.longbridgepizza.com' ,
          image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/7TSpBRymh8-d9HFrtdysoQ/ms.jpg' },
        { name: 'Goat Hill Pizza',
          yelpID: 'goat-hill-pizza-san-francisco',
          url: 'http://www.littlestarpizza.com' ,
          image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/8BhYHvMpJZvhl34au3471A/ms.jpg' },
        { name: 'All Good Pizza',
          yelpID: 'all-good-pizza-san-francisco',
          url: 'http://www.allgoodpizza.com' ,
          image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/xMwVf8glzvtwbemKrJsCYg/ms.jpg' }
      ];

      $httpBackend.expect('GET', '/api/restaurants').respond(mockResponse);

      Restaurants.getAll().then(function (Restaurants) {
        expect(Restaurants).to.deep.equal(mockResponse);
      });

      $httpBackend.flush();
    });

  });

});