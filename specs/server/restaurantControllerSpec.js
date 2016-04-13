var expect = require('chai').expect;
var mongoose = require('mongoose');
//do these filepaths look ok?
var Restaurant = require('../../server/restaurants/restaurantModel');
var restaurantController = require('../../server/restaurants/restaurantController');

var dbURI = 'mongodb://localhost/platypus';

// The `clearDB` helper function, when invoked, will clear the database
var clearDB = function (done) {
  //is the collection name case sensitive?
  mongoose.connection.collections['restaurant'].remove(done);
};

describe('Restaurant Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  beforeEach(function (done) {
    clearDB(function () {
      var restaurants = [
        {
          name: 'ChickenWaffle',
          yelpID: 'ChickenWaffleID',
          url: 'www.chickenwaffle.com',
          eat24_url: 'www.eat24chickenwaffle.com',
          image_url: 'ChickenWaffleURL',
          likes: 3
        },
        {
          name: 'SoyKingdom',
          yelpID: 'SoyKingdomID',
          url: 'www.SoyKingdom.com',
          eat24_url: 'www.eat24SoyKingdom.com',
          image_url: 'SoyKingdomURL',
          likes: 3
        },
        {
          name: 'BurgerHeaven',
          yelpID: 'BurgerHeavenID',
          url: 'www.BurgerHeaven.com',
          eat24_url: 'www.eat24BurgerHeaven.com',
          image_url: 'BurgerHeavenURL',
          likes: 3
        },
        {
          name: 'GravyTrain',
          yelpID: 'GravyTrainID',
          url: 'www.GravyTrain.com',
          eat24_url: 'www.eat24GravyTrain.com',
          image_url: 'GravyTrainURL',
          likes: 3
        }
      ];
      Restaurant.create(restaurants, done);
    });
  });

  it('Creates likes', function (done) {
    var newRestaurant = {
      name: 'LiteDelights',
      yelpID: 'LiteDelightsID',
      url: 'www.LiteDelights.com',
      eat24_url: 'www.eat24LiteDelights.com',
      image_url: 'LiteDelightsURL',
      likes: 3
    };

    likesController.addOne(newRestaurant, function() {
      Likes.findOne({name: 'LiteDelights'}, function(err, result) {
        //changed 'result' from example to 'output' so 'result' is used once
        var output = {
          name: result.name,
          yelpID: result.yelpID,
          url: result.url,
          eat24_url: result.eat24_url,
          image_url: result.image_url,
          likes: result.likes
        };

        var test = {
          name: newRestaurant.name,
          yelpID: newRestaurant.yelpID,
          url: newRestaurant.url,
          eat24_url: newRestaurant.eat24_url,
          image_url: newRestaurant.image_url,
          likes: newRestaurant.likes
        };
        expect(output).to.eql(test);
        done();
      });
    });
  });

  //updateOne
    //not so sure about this test, as updateOne makes us of req.params.id
  //should we use findOne to obtain the id?
  it('should update the restaurant\'s info with what\'s given', function(done) {
    var newURL = 'newURL.com';
 
    var result = restaurantController.updateOne('_id', newURL, function() {
      restaurantController.retrieveOne('_id', function(restaurant) {
        result = restaurant.url;
 
        expect(result).to.equal(newURL);
        done();
      });
    });
  });
 
  //removeOne
  //not so sure about this test, as removeOne makes us of req.params.id
  //should we use findOne to obtain the id?
  // it('should have a method that removes a like', function (done) {
  //   likesController.removeOne({restaurant:5}, function(likes) {
  //     expect(Likes.retrieveOne(5)).to.equal(undefined);
  //     done();
  //   });
  // });
  it('should remove a restaurant from the database', function(done) {

    //set length
    var oldDB = restaurants.length;

    restaurantController.removeOne('_id');
    expect(restaurant.length).to.eql(oldDB - 1);
    done();
  });

  //retrieveOne
  //not so sure about this test, as retrieveOne makes us of req.params.id
  //should we use findOne to obtain the id?
  //   it('should have a method that returns a like', function (done) {
  //   likesController.retrieveOne({restaurant:5}, function(likes) {
  //     expect(likes.restaurant).to.equal(5);
  //     done();
  //   });
  // });
  it('should return the specific restaurant that was asked for', function(done) {
    restaurantController.retrieveOne('_id', function(result) {
    //need to complete
    expect(result).to.eql();
    done();
    });
  });

  it('should have a method that returns all restaurants', function (done) {
    restaurantController.retrieveAll(function(restaurants) {
      expect(restaurants.length).to.equal(5);
      done();
    });
  });
});
