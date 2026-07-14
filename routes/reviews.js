const express = require('express');
let router = express.Router();
const Review = require('../controllers/ReviewController');

router.get('/', Review.getAllReviews);
router.post('/', Review.saveReview);
router.get('/movies/:movieId', Review.getReviewsByMovieId);

module.exports = router;