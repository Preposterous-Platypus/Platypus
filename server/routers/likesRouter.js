var likesRouter = require('express').Router();

var likesController = require('../likes/likesController.js');

likesRouter.route('/')
               .post(likesController.addOne)
               .get(likesController.retrieveLikedRestaurants);

likesRouter.route('/:id')
               .get(likesController.retrieveOne)
               .delete(likesController.removeOne);

likesRouter.route('/addOrRemove')
               .post(likesController.addOrRemove);

module.exports = likesRouter;