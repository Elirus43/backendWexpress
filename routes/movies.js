const express = require('express');
let router = express.Router();
const Movie = require('../controllers/MovieController');

router.get('/', Movie.getAllMovies);
router.post('/', Movie.saveMoive);
router.get('/:id', Movie.getMovieById);
router.put('/:id', Movie.updateMovie);
router.delete('/:id', Movie.deleteMovie);

module.exports = router;