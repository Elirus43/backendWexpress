const Review = require("../models/Review");
const Movie = require("../models/Movie");
const mongoose = require("mongoose");
const util = require("../util/AppErr");

async function getAllReviews()
{
    let reviews = await Review.find();
    return reviews;
}
async function getReviewsByMovieId(movieId)
{
    let id = new mongoose.Types.ObjectId(movieId);
    let reviews = await Review.find({
        movie: id
    })

        // .populate('movie'); movie object join also
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
async function updateReviewById(id, review)
{
    review.movie = new mongoose.Types.ObjectId(review.movie);
    let _id = new mongoose.Types.ObjectId(id);
    let updatedReview = await Review.findOneAndUpdate({
        _id
    }, review, {
        runValidators: true,
        returnDocument: 'after'
    })
    return updatedReview;
}
async function deleteReviewById(id)
{
    let _id = new mongoose.Types.ObjectId(id);
    let review = await Review.findOneAndDelete({
        _id
    })
    return review;
}

module.exports = {
    getAllReviews,
    getReviewsByMovieId,
    saveReview,
    updateReviewById,
    deleteReviewById
}