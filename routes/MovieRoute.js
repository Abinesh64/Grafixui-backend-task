const router = require("express").Router();
const {postMovie, getMovies, getMovie, deleteMovie, updateMovie} = require('../controllers/MovieController');

router.post('/', postMovie);

router.get('/', getMovies);

router.get("/find/:userid", getMovie) 

router.delete("/delete/:userid", deleteMovie);

router.put("/update/:userid", updateMovie);

module.exports = router