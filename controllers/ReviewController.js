const reviewService = require('../services/ReviewService');
const mongoose = require('mongoose');
const util = require('../util/AppErr');

async function getAllReviews(req, res)
{
    let reviews = await reviewService.getAllReviews();
    res.json({
        message: 'All Reviews successfully retrieved',
        data: reviews
    })
}
async function getReviewsByMovieId(req, res)
{
    let movieId = req.params.movieId;
    let reviews = await reviewService.getReviewsByMovieId(movieId);
    res.json({
        message: 'Reviews successfully retrieved',
        data: reviews
    })
}
async function saveReview(req, res)
{
    let review = await reviewService.saveReview(req.body);
    res.json({
        message: 'Review saved successfully',
        data: review
    })
}
async function updateReviewById(req, res)
{
    let id = req.params.id;
    let review = await reviewService.updateReviewById(id, req.body);
    res.json({
        message: 'Review saved successfully',
        data: review
    })
}
async function deleteReviewById(req, res)
{
    let id = req.params.id;
    let review = await reviewService.deleteReviewById(id);
    res.json({
        message: "Review deleted successfully",
        data: review
    })
}

module.exports = {
    getAllReviews,
    getReviewsByMovieId,
    saveReview,
    updateReviewById,
    deleteReviewById
}