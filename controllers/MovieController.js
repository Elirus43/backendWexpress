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
async function getMovieByYear(req, res)
{
    let year = req.params.year;
    let movie = await movieService.getMovieByYear(year);
    res.status(200).json({
        message: "Movie Details Returned",
        data: movie,
    })
}
async function getMovieByTitle(req, res)
{
    let title = req.params.title;
    let movie = await movieService.getMovieByTitle(title);
    res.status(200).json({
        message: "Movie List Returned",
        data: movie,
    })
}
async function saveMovie(req, res)
{
    let movie = req.body;
    let savedMovie = await movieService.saveMovie(movie);
    res.status(201).json({
        message: "Movie saved successfully",
        data: savedMovie,
    })
}
async function updateMovie(req, res)
{
    let id = req.params.id;
    let movie = req.body;
    let updatedMovie = await movieService.updateMovie(id, movie);
    if(updatedMovie)
    {
        res.json({
            message: "Movie updated successfully",
            data: updatedMovie,
        })
    } else {
        throw new util.NotFoundError('Movie Id ' + id + ' not found');
    }
}
async function deleteMovie(req, res)
{
    let id = req.params.id;
    let movie = await movieService.deleteMovie(id);
    if(movie)
    {
        res.json({
            message: "Movie deleted successfully",
            data: movie,
        })
    } else {
        throw new util.NotFoundError('Movie Id ' + id + ' not found');
    }
}
module.exports = {
    getAllMovies,
    getMovieById,
    getMovieByYear,
    getMovieByTitle,
    saveMovie,
    updateMovie,
    deleteMovie
};