var _ = require('underscore');
var chai = require('chai');
var expect = chai.expect;
var Users = require('../models/users.js');

// Adds support for assertions on array elements
// https://github.com/chaijs/Chai-Things#examples
chai.use(require('chai-things'));

describe('Users Model', function () {
  var testUsers;

  beforeEach(function () {
    testUsers = [
      {
        id: 1,
        name: 'Taka',
        email: 'taka@taka.com'
      },
      {
        id: 2,
        name: 'Nayo',
        email: 'nayo@nayo.com'
      },
      {
        id: 3,
        name: 'Amrit',
        email: 'amrit@amrit.com'
      }
    ];

    Users.setAll(testUsers);
  });

  describe('getAll', function () {
    it('should retrieve all users', function (done) {
      expect(Users.getAll()).to.eql(testUsers);
      done();
    });
  });

  describe('getOne', function () {
    it('should retrieve a user given an ID', function (done) {
      expect(Users.getOne(1)).to.eql(testUsers[0]);
      done();
    });
  });

  describe('addOne', function () {
    it('should properly add new users', function (done) {
      // Create Dummy User
      var testAddUser = {
        name: 'Bob',
        email: 'bob@bob.com'
      };

      Users.addOne(testAddUser);

      // Need to remove added ID
      var resultTestUser = Users.getOne(4);
      delete resultTestUser.id;

      expect(resultTestUser).to.eql(testAddUser);
      done();
    });
  });

  describe('updateOne', function () {
    it('should update a user given an id and properties', function (done) {
      var update = {
        name: 'Mark',
        email: 'mark@mark.com'
      };
      Users.updateOne(1, update);

      var resultTestUser = Users.getOne(1);
      delete resultTestUser.id;

      expect(resultTestUser).to.eql(update);
      done();
    });

    it('should update a user even with only partial information', function (done) {
      var update = {
        email: 'mark@mark.com'
      };
      Users.updateOne(1, update);

      expect(Users.getOne(1).email).to.equal(update.email);
      expect(Users.getOne(1).name).to.equal(testUsers[0].name);

      done();
    });
  });

  describe('deleteOne', function () {
    it('should delete a user given an id', function (done) {
      Users.deleteOne(1);
      expect(Users.getOne(1)).to.equal(undefined);
      done();
    });
  });

});
