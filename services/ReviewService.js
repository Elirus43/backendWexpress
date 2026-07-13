const Review = require("../models/Review");
const Movie = require("../models/Movie");
const mongoose = require("mongoose");
const util = require("../util/AppErr");

async function getAllReviews()
{
    let reviews = await Review.find();
    return reviews;
}
async function saveReview(review)
{
    const validMovie = await Movie.findById(review.movie);
    if(!validMovie)
    {
        throw new util.NotFoundError('Movie not found');
    }
    let newReview = new Review({
        ...review,
        movie:new mongoose.Types.ObjectId(review.movie),
    })
    let savedReview = await newReview.save();
    return savedReview;
}

module.exports = {
    getAllReviews,
    saveReview
}