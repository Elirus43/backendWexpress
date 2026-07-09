const movieService = require("../services/MovieService");
const util = require("../util/AppErr");
const mongoose = require("mongoose");

async function getAllMovies(req, res)
{
    let movies = await movieService.getAllMovies();
    res.status(200).json({
        message: "Movies List Returned",
        data: movies,
    });
}
async function getMovieById(req, res)
{
    let id = req.params.id;
    let movie = await movieService.getMovieById(id);
    if(movie)
    {
        res.status(200).json({
            message: "Movie Details Returned",
            data: movie,
        })
    } else {
        throw new util.NotFoundError("Movie Not Found");
    }

}
async function saveMoive(req, res)
{
    let movie = req.body;
    let savedMovie = await movieService.saveMovie(movie);
    res.status(201).json({
        message: "Movie saved successfully",
        data: savedMovie,
    })
}
async function updateMovie(id, movie)
{

}
module.exports = {
    getAllMovies,
    getMovieById,
    saveMoive,
    updateMovie,
};