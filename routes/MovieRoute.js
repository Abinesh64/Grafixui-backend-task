const router = require("express").Router();
const {postMovie, getMovies, getMovie, deleteMovie, updateMovie} = require('../controllers/MovieController');
const { verifyAdmin} = require("./VerifyUserAccess");


router.post('/', verifyAdmin, postMovie);

router.get('/', getMovies);

router.get("/find/:userid", getMovie) 

router.delete("/delete/:userid", verifyAdmin, deleteMovie);

router.put("/update/:userid", verifyAdmin, updateMovie);

module.exports = router