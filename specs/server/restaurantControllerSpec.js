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
          yelpID: 'asdfasdfasdf',
          distance: String,
          image_url: String,
          likes: Number
        },
        {
          name: {
            type: String,
            unique: true,
            required: true
          },
          yelpID: String,
          distance: String,
          image_url: String,
          likes: Number
        },
        {
           name: {
            type: String,
            unique: true,
            required: true
          },
          yelpID: String,
          distance: String,
          image_url: String,
          likes: Number
        },
        {
          name: {
            type: String,
            unique: true,
            required: true
          },
          yelpID: String,
          distance: String,
          image_url: String,
          likes: Number
        }
      ];
      Likes.create(likes, done);
    });
  });

  it('Creates likes', function (done) {
    var newLike = {
      restaurant: 5,
      user: 5
    };

    likesController.addOne(newLike, function() {
      Likes.findOne({restaurant: 5}, function(err, result) {
        //changed 'result' from example to 'output' so 'result' is used once
        var output = {
          restaurant: result.restaurant,
          user: result.user
        };

        var test = {
          restaurant: newLike.restaurant,
          user: newLike.user
        };
        expect(output).to.eql(test);
        done();
      });
    });
  });

  it('should have a method that returns all likes', function (done) {
    likesController.retrieveAll(function(likes) {
      expect(likes.length).to.equal(5);
      done();
    });
  });

//not so sure about this test, as retrieveOne makes us of req.params.id
//should we use findOne to obtain the id?
//   it('should have a method that returns a like', function (done) {
//   likesController.retrieveOne({restaurant:5}, function(likes) {
//     expect(likes.restaurant).to.equal(5);
//     done();
//   });
// });

//not so sure about this test, as removeOne makes us of req.params.id
//should we use findOne to obtain the id?
  // it('should have a method that removes a like', function (done) {
  //   likesController.removeOne({restaurant:5}, function(likes) {
  //     expect(Likes.retrieveOne(5)).to.equal(undefined);
  //     done();
  //   });
  // });

});
