const express = require('express')
const moviesController = require('./../controller/moviescontroller')

const router =  express.Router();

// router.param('id', moviesController.checkId)

router.route('/')
    .get(moviesController.getAllMovies)
    .post(moviesController.addMovie)

router.route('/:id')
    .get(moviesController.getMovie)
    .patch(moviesController.updateMovie)
    .delete(moviesController.deleteMovie)

module.exports = router;