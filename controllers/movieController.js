const Movie = require("../models/MovieModels");

const postMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
      } catch (err) {
        res.status(500).json(err);
      }
}

const getMovie = async(req, res)=>{
    try{
        const movie = await Movie.findOne({userid : req.params.userid})
        res.status(200).json(movie);
    }
    catch(err){
        res.status(500).json(err)
    }
}

const deleteMovie = async(req, res) => {
    try {
        const result = await Movie.deleteOne({ userid: req.params.userid });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Movie not found." });
        }
        res.status(200).json({ message: "Movie has been deleted." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateMovie = async (req, res) => {
    try {        
        const updatedMovie = await Movie.findOneAndUpdate(
            { userid: req.params.userid },
            req.body,
            { new: true }
        );        
        if (updatedMovie) {
            res.status(200).json(updatedMovie);
        } else {
            res.status(404).json({ error: "Movie not found" });
        }
    } catch (err) {
        console.error("Error updating Movie:", err);
        res.status(500).json(err);
    }
}

module.exports = {
    postMovie,
    getMovies,
    getMovie,
    deleteMovie,
    updateMovie
}

