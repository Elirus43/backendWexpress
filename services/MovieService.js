const Movie = require("../models/Movie");
const mongoose = require("mongoose");

async function getAllMovies(req, res)
{
    let movies = await Movie.find({});
    return movies;
}
async function getMovieById(id)
{
    let movie = await Movie.findById(id);
    return movie;
}
async function saveMovie(movie)
{
    let savedMovie = await new Movie(movie).save();
    return savedMovie;
}
async function updateMovie(id, movie)
{
    const _id = new mongoose.Types.ObjectId(id);
    let updateMovie = await Movie.findOneAndUpdate({
        _id,
    }, movie, {
        runValidators: true,
        returnDocument: 'after',
        upsert: true,
    })
    return updateMovie;
}
async function deleteMovie(id)
{
    const _id = new mongoose.Types.ObjectId(id);
    let deletedMovie = await Movie.findByIdAndDelete({
        _id,
    });
    return deletedMovie;
}
async function getMovieByYear(year)
{
    let movie = await Movie.find({
        year: year,
    })
    return movie;
}
module.exports = {
    getAllMovies,
    getMovieById,
    saveMovie,
    updateMovie,
    deleteMovie,
    getMovieByYear
}