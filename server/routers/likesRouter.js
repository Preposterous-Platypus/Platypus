var likesRouter = require('express').Router();

var likesController = require('../likes/likesController.js');

likesRouter.route('/')
               .post(likesController.addOne)
               .get(likesController.retrieveAll);

likesRouter.route('/:id')
               .get(likesController.retrieveOne)
               .delete(likesController.removeOne);

module.exports = likesRouter;