const express = require('express');
let router = express.Router();
const Movie = require('../controllers/MovieController');

router.get('/', Movie.getAllMovies);
router.post('/', Movie.saveMovie);
router.get('/:id', Movie.getMovieById);
router.get('/year/:year', Movie.getMovieByYear);
router.get('/title/:title', Movie.getMovieByTitle);
router.put('/:id', Movie.updateMovie);
router.delete('/:id', Movie.deleteMovie);

module.exports = router;