const express = require('express');
let router = express.Router();
const Review = require('../controllers/ReviewController');

router.get('/', Review.getAllReviews);
router.post('/', Review.saveReview);
router.get('/movies/:movieId', Review.getReviewsByMovieId);
router.put('/:id', Review.updateReviewById);
router.delete('/:id', Review.deleteReviewById);

module.exports = router;