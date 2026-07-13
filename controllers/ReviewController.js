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
async function saveReview(req, res)
{
    let review = await reviewService.saveReview(req.body);
    res.json({
        message: 'Review saved successfully',
        data: review
    })
}

module.exports = {
    getAllReviews,
    saveReview
}